import {MiddlewareConsumer, Module, NestModule} from '@nestjs/common';
import { PassportModule } from "@nestjs/passport";
import * as expressSession from "express-session";
import * as passport from 'passport';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from "../users/users.module";
import { LocalStrategy } from "./local.strategy";
import { UserSerializer } from "./user.serializer";
import { JwtModule } from "@nestjs/jwt";
import { jwtConstants} from "./constants";
import { tokenGuard } from "../JwtToken/token-auth/token.guard";

@Module({
  imports: [UsersModule,
      PassportModule.register({
          session: true
      }),
      JwtModule.register({
          global: true,
          secret: jwtConstants.secret,
          signOptions: { 'expiresIn': '600s' },
      })
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, UserSerializer, tokenGuard],
  exports: [tokenGuard]
})
export class AuthModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(
                expressSession({
                    secret: 'SOME SESSION SECRET',
                    resave: false,
                    saveUninitialized: false,
                }),
                passport.session(),
            )
            .forRoutes('*')
    }
}
