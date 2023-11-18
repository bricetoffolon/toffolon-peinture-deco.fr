import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { PrismaModule } from "../prisma/prisma.module";
import { UsersController } from "./users.controller";
import { MailModule } from "../mail/mail.module";
import { JwtTokenModule } from "../JwtToken/jwtToken.module";
import {ThrottlerGuard} from "@nestjs/throttler";
import {APP_GUARD} from "@nestjs/core";

@Module({
  imports: [PrismaModule, MailModule, JwtTokenModule],
  providers: [
      UsersService,
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
  controllers: [UsersController],
  exports: [UsersService],
})
export class UsersModule {}
