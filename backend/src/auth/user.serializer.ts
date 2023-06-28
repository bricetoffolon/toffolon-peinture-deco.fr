import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { PassportSerializer } from "@nestjs/passport";
import { UsersService } from "../users/users.service";

@Injectable()
export class UserSerializer extends PassportSerializer {
    constructor(private readonly usersService: UsersService) {
        super();
    }

    serializeUser(user: any, done: Function): any {
        done(null, user.email);
    }

    deserializeUser(email: any, done: Function): any {
        try {
            const user = this.usersService.user({'email': email})

            if (!user) {
                return done (
                    `Could not deserizalise user: user with ${email} could not be found`,
                    null,
                );
            }

            done(null, user);
        } catch (error) {
            console.log('An error occurred during user deserialization:', error);

            throw new InternalServerErrorException('User deserialization failed. Please try again later');
        }
    }
}