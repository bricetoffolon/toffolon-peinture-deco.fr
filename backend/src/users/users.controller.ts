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
        @Body('password') userPassword: string,
        @Body('email') userEmail: string,
    ): Promise<User> {

        const saltOrRounds = 10;
        const hash = await bcrypt.hash(userPassword, saltOrRounds);

        await this.mailService.sendVerificationMail(userEmail, await this.authTokenService.genAuthToken(userEmail, "0"));

        return await this.usersService.createUser({
            email: userEmail,
            password: hash,
        })
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
    ): Promise<User> {
        return await this.usersService.user({
            "email": req.session.passport.user,
        });
    }

    @UseGuards(tokenGuard)
    @Post('verify')
    async verify(@Request() req) {
        await this.usersService.updateUser({where: {"email": req.user.username}, data: {'role': 'ADMIN'}})
    }

    @Post('re-verify')
    async resendVerify(@Body('email') userEmail: string): Promise<void> {
        const user = await this.usersService.user({"email": userEmail})

        if (user.role == "ADMIN") {
            throw new UnauthorizedException();
        }

        await this.mailService.sendVerificationMail(userEmail, await this.authTokenService.genAuthToken(userEmail, "0"));
    }

    @Post('forgot-password')
    async forgotPassword(@Body('email') userEmail: string): Promise <string> {
        const user = await this.usersService.user({"email": userEmail});

        if (user) {
            await this.mailService.sendPasswordChangeMail(user.email, await this.authTokenService.genAuthToken(user.email, "0"))
        }

        return "A verification email has been sent"
    }
    @UseGuards(tokenGuard)
    @Post('update-password')
    async updatePassword(@Body('password') userPassword: string, @Request() req) {
        if (!userPassword) {
            throw new HttpException('Missing argument: password', HttpStatus.BAD_REQUEST);
        }

        const saltOrRounds = 10;
        const hash: string = await bcrypt.hash(userPassword, saltOrRounds);

        await this.usersService.updateUser({where: {"email": req.user.username}, data: {'password': hash}})
    }
}