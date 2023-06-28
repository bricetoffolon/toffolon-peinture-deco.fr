import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from "../users/users.module";
import {JwtModule} from "@nestjs/jwt";
import {jwtConstants} from "./constants";
import {APP_GUARD} from "@nestjs/core";
import {AuthGuards} from "./auth.guards";

@Module({
  imports: [
      UsersModule,
      JwtModule.register({
        global: true,
        secret: jwtConstants.secret,
        signOptions: { expiresIn: '60s' },
      })
  ],
  controllers: [AuthController],
  providers: [
      AuthService,
      {
          provide: APP_GUARD,
          useClass: AuthGuards
      }
  ]
})
export class AuthModule {}
