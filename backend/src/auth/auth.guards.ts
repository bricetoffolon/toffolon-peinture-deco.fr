import {CanActivate, ExecutionContext, Injectable, UnauthorizedException} from "@nestjs/common";
import { Request } from "express";
import {JwtService} from "@nestjs/jwt";
import {IS_PUBLIC_KEY} from "./decorators/public.decorator";
import {jwtConstants} from "./constants";
import {Reflector} from "@nestjs/core";

@Injectable()
export class AuthGuards implements  CanActivate {
    constructor(private jwtService: JwtService, private reflector: Reflector) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);

        console.log(isPublic)

        if (isPublic) {
            return true;
        }

        const request = context.switchToHttp().getRequest();
        const token = this.extractTokenFromHeader(request);
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

    private extractTokenFromHeader(request: Request): string | undefined {
        const [type, token] = request.headers.authorization?.split(' ') ?? [];
        return type == 'Bearer' ? token : undefined
    }
}