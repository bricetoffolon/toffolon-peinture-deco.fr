import {Body, Controller, Post, Get, UseGuards, Request, UnauthorizedException } from "@nestjs/common";
import { UsersService } from "./users.service";
import { User } from "@prisma/client";

import * as bcrypt from 'bcrypt';
import { AuthTokenService } from "../JwtToken/JWTToken.service";
import MailService from "../mail/mail.service";
import { tokenGuard } from "../JwtToken/token-auth/token.guard";
import { IsAuthenticatedGuard } from "../auth/guards/is-authenticated/is-authenticated.guard";

@Controller('user')
export class UsersController {
    constructor(private readonly usersService: UsersService, private readonly mailService: MailService, private readonly authTokenService: AuthTokenService) {}

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
    @Get('/')
    async getUser(
        @Request() req: any
    ): Promise<User> {
        console.log()

        return await this.usersService.user({
            "email": req.session.passport.user,
        });
    }

    @UseGuards(tokenGuard)
    @Get('verify')
    async verify(@Request() req) {
        await this.usersService.updateUser({where: {"email": req.user.username}, data: {'role': 'ADMIN'}})
    }

    @Post('re-verify')
    async resendVerify(@Body('email') userEmail: string) {
        const user = await this.usersService.user({"email": userEmail})

        if (user.role == "ADMIN") {
            throw new UnauthorizedException();
        }

        await this.mailService.sendVerificationMail(userEmail, await this.authTokenService.genAuthToken(userEmail, "0"));
    }
}