import { Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { UsersService } from "../users/users.service";
import { User} from "@prisma/client";

@Injectable()
export class AuthService {
    constructor(private readonly usersService: UsersService) {}

    async validateUser(email: string, password: string): Promise<User> | undefined {
        try {
            const user: User = await this.usersService.user({"email": email})

            if (user && user.password == password)
                return user;

        } catch (error) {
            console.error('An error occurred during user validation:', error);

            throw new InternalServerErrorException('User validation failed. Please try again later')
        }

        throw new UnauthorizedException('Invalid Credentials');
    }
}
