import { Body, Controller, Post, Get } from "@nestjs/common";
import { UsersService } from "./users.service";
import { User } from "@prisma/client";

@Controller('user')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post('/')
    async addUser(
        @Body('password') userPassword: string,
        @Body('email') userEmail: string,
    ): Promise<User> {
        return await this.usersService.createUser({
            email: userEmail,
            password: userPassword,
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