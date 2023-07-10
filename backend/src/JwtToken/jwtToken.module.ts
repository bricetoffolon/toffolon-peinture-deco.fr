import { Module } from '@nestjs/common';
import { AuthTokenService } from "./JWTToken.service";
import { tokenGuard } from "./token-auth/token.guard";


@Module({
    providers: [AuthTokenService, tokenGuard],
    exports: [AuthTokenService]
})
export class JwtTokenModule {}
