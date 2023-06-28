import {MiddlewareConsumer, Module, NestModule} from '@nestjs/common';
import { PassportModule } from "@nestjs/passport";
import * as expressSession from "express-session";
import * as passport from 'passport';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from "../users/users.module";
import { LocalStrategy } from "./local.strategy";
import { UserSerializer } from "./user.serializer";

@Module({
  imports: [UsersModule,
      PassportModule.register({
          session: true
      })
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, UserSerializer],
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
