import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthTokenService {
    constructor(
        private jwtService: JwtService,
    ) {}

    async genAuthToken(userEmail: string, userId: string): Promise<string> {
        const payload = { sub: userId, username: userEmail}

        return await this.jwtService.signAsync(payload);
    }
}