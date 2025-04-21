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
import { createClient } from 'redis';
import {RedisStore} from "connect-redis"
import {ConfigModule, ConfigService} from "@nestjs/config";

@Module({
  imports: [UsersModule,
      PassportModule.register({
          session: true
      }),
      ConfigModule.forRoot({
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
    private readonly sessionSecret;
    private readonly redisUrl;
    private readonly sessionMaxAge;
    private readonly isProduction;

    constructor(private configService: ConfigService) {
        this.redisUrl = this.configService.get<string>('REDIS_URL');
        this.sessionSecret = this.configService.get<string>('SESSION_SECRET');
        this.sessionMaxAge = this.configService.get<number>('SESSION_MAX_AGE', 30 * 60 * 1000);
        this.isProduction = this.configService.get<string>('NODE_ENV') === 'production';
    }

    async configure(consumer: MiddlewareConsumer) {
        const redisClient = createClient({
            legacyMode: false, // Remove legacyMode for Redis v4+
            url: this.redisUrl,
        });

        await redisClient.connect().catch(console.error);

        const redisStore = new RedisStore({
            client: redisClient,
            prefix: "session-store:",
        });

        consumer
            .apply(
                expressSession({
                    store: redisStore,
                    secret: this.sessionSecret,
                    resave: false,
                    saveUninitialized: false,
                    cookie: {
                        secure: this.isProduction,
                        maxAge: this.sessionMaxAge, // 30 minutes
                        httpOnly: true,
                        sameSite: this.isProduction ? 'none' : 'lax',
                    }
                }),
                passport.initialize(),
                passport.session(),
            )
            .forRoutes('*')
    }
}
