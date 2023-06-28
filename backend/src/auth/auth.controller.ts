import { Controller, Get, Post, UseGuards, Req, Session, InternalServerErrorException } from '@nestjs/common';
import { LocalAuthGuard } from "./guards/local-auth/local-auth.guard";
import { Session as ExpressSession } from 'express-session';
import { IsAuthenticatedGuard } from "./guards/is-authenticated/is-authenticated.guard";
import { Request } from "express";

@Controller('auth')
export class AuthController {
    @UseGuards(LocalAuthGuard)
    @Post('login')
    login(@Req() request: any, @Session() session: ExpressSession) {
        console.log(session)

        return request.user;
    }

    @UseGuards(IsAuthenticatedGuard)
    @Post('logout')
    async logout(@Req() request: Request) {
        const logoutError = await new Promise((resolve) =>
            request.logOut({ keepSessionInfo: false }, (error) =>
                resolve(error),
            ),
        );

        if (logoutError) {
            console.log(logoutError);

            throw new InternalServerErrorException('Could not log out user')
        }

        return {
            logout: true,
        };
    }

    @UseGuards(IsAuthenticatedGuard)
    @Get('protected')
    protected () {
        return {
            message: "route protected"
        }
    }
}
