import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class IsAuthenticatedGuard implements CanActivate {

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest() as Request;

        const user: any = await request.user;

        if (user) {
            if (user.role && user.role != "ADMIN") {
                throw new UnauthorizedException("Verify your address mail first")
            }
        }

        return request.isAuthenticated();
  }
}
