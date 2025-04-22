import { Controller, Get, Post, UseGuards, Req, Session, InternalServerErrorException } from '@nestjs/common';
import { LocalAuthGuard } from "./guards/local-auth/local-auth.guard";
import { Session as ExpressSession } from 'express-session';
import { IsAuthenticatedGuard } from "./guards/is-authenticated/is-authenticated.guard";
import { UserResponseDto } from "../users/users.dto";
import { Request } from "express";

@Controller('auth')
export class AuthController {
    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Req() request: any, @Session() session: ExpressSession): Promise<UserResponseDto> {
        const user = request.user;
        await new Promise((resolve) => {
            request.session.save((err) => {
                if (err) {
                    console.error('Session save error:', err);
                }
                console.log('After save - sessionID:', request.sessionID);
                console.log('Session cookie:', request.headers.cookie);
                resolve(null);
            });
        });
        return new UserResponseDto(user.id, user.email, user.name, user.role);
    }

    @UseGuards(IsAuthenticatedGuard)
    @Post('logout')
    async logout(@Req() request: Request): Promise<{ logout: boolean }> {
        const logoutError = await new Promise((resolve) =>
            request.logOut({keepSessionInfo: false}, (error) =>
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
    protected(@Session() session: ExpressSession) {
        console.log(session["passport"].user)

        return {
            message: "route protected"
        }
    }
}
