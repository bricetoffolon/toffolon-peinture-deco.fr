import {
    Body,
    Controller,
    Post,
    Get,
    UseGuards,
    Request,
    UnauthorizedException,
    HttpException,
    HttpStatus
} from "@nestjs/common";
import { UsersService } from "./users.service";
import { User } from "@prisma/client";
import { CreateUserDto, UserResponseDto } from "./users.dto";
import * as bcrypt from 'bcrypt';
import { AuthTokenService } from "../JwtToken/jwtToken.service";
import MailService from "../mail/mail.service";
import { tokenGuard } from "../JwtToken/token-auth/token.guard";
import { IsAuthenticatedGuard } from "../auth/guards/is-authenticated/is-authenticated.guard";


@Controller('user')
export class UsersController {
    constructor(private readonly usersService: UsersService, private readonly mailService: MailService, private readonly authTokenService: AuthTokenService) {}

    @UseGuards(tokenGuard)
    @Post('/')
    async addUser(
        @Body() CreateUserDto: CreateUserDto
    ): Promise<UserResponseDto> {

        const saltOrRounds = 12;
        const hash = await bcrypt.hash(CreateUserDto.password, saltOrRounds);

        await this.mailService.sendVerificationMail(CreateUserDto.email, await this.authTokenService.genAuthToken(CreateUserDto.email, "0"));

        const user = await this.usersService.createUser({
            email: CreateUserDto.email,
            name: CreateUserDto.name,
            password: hash,
        })

        return new UserResponseDto(user.id, user.email, user.name, user.role);
    };

    @UseGuards(IsAuthenticatedGuard)
    @Post('/new')
    async newUser(
        @Body('email') userEmail: string,
    ): Promise<void> {
        const user = await this.usersService.user({"email": userEmail});

        if (!user) {
            await this.mailService.sendUserCreateMail(userEmail, await this.authTokenService.genAuthToken(userEmail, "0"));
        }
    }

    @UseGuards(IsAuthenticatedGuard)
    @Get('/')
    async getUser(
        @Request() req: any
    ): Promise<UserResponseDto> {
        const user = await this.usersService.user({
            "email": req.session.passport.user,
        });

        return new UserResponseDto(user.id, user.email, user.name, user.role);
    }

    @UseGuards(tokenGuard)
    @Post('verify')
    async verify(@Request() req) {
        await this.usersService.updateUser({where: {"email": req.user.username}, data: {'role': 'ADMIN'}})
    }

    @Post('re-verify')
    async resendVerify(@Body('email') userEmail: string): Promise<void> {
        if (!userEmail) {
            throw new HttpException('Missing argument: email', HttpStatus.BAD_REQUEST);
        }

        const user = await this.usersService.user({"email": userEmail})

        if (!user || user.role == "ADMIN") {
            throw new UnauthorizedException();
        }

        await this.mailService.sendVerificationMail(userEmail, await this.authTokenService.genAuthToken(userEmail, "0"));
    }

    @Post('forgot-password')
    async forgotPassword(@Body('email') userEmail: string): Promise <string> {
        if (!userEmail) {
            throw new HttpException('Fill email argument', HttpStatus.NOT_FOUND);
        }

        const user = await this.usersService.user({"email": userEmail});

        if (user) {
            await this.mailService.sendPasswordChangeMail(user.email, await this.authTokenService.genAuthToken(user.email, "0"))
        }

        return "A verification email has been sent"
    }
    @UseGuards(tokenGuard)
    @Post('update-password')
    async updatePassword(@Body('password') password: string, @Body('confirm-password') confirmPassword: string, @Request() req) {
        if (!password || !confirmPassword) {
            throw new HttpException('Missing argument', HttpStatus.BAD_REQUEST);
        }

        if (password !== confirmPassword) {
            throw new HttpException('Passwords do not match', HttpStatus.BAD_REQUEST);
        }

        const saltOrRounds = 10;
        const hash: string = await bcrypt.hash(password, saltOrRounds);

        await this.usersService.updateUser({where: {"email": req.user.username}, data: {'password': hash}})
    }
}