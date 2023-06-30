import { Body, Controller, Post, Get } from "@nestjs/common";
import { UsersService } from "./users.service";
import { User } from "@prisma/client";

import * as bcrypt from 'bcrypt';

@Controller('user')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post('/')
    async addUser(
        @Body('password') userPassword: string,
        @Body('email') userEmail: string,
    ): Promise<User> {

        const saltOrRounds = 10;
        const hash = await bcrypt.hash(userPassword, saltOrRounds);

        return await this.usersService.createUser({
            email: userEmail,
            password: hash,
            role: "admin"
        })
    };

    @Get('/')
    async getUser(
        @Body('email') userEmail: string,
    ): Promise<User> {
        return await this.usersService.user({
            "email": userEmail,
        });
    }
}