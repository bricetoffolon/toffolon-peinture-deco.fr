import { ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { jwtConstants } from "../../auth/constants";
import * as url from "url";

@Injectable()
export class tokenGuard {
    constructor(private jwtService: JwtService) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();
        const token = this.extractTokenFromQuery(request)

        if (!token) {
            throw new UnauthorizedException();
        }

        try {
            request['user'] = await this.jwtService.verifyAsync(
                token,
                {
                    secret: jwtConstants.secret
                }
            );
        } catch {
            throw new UnauthorizedException();
        }

        return true;
    }

    private extractTokenFromQuery(request: Request): string | undefined {
        let query;

        if (request && request.url) {
            query = url.parse(request.url, true).query

            if (query && query.key) {
                return query.key
            }
        }
        return undefined
    }
}