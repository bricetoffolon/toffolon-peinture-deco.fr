import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { PrismaModule } from "../prisma/prisma.module";
import { UsersController } from "./users.controller";
import { MailModule } from "../mail/mail.module";
import { JwtTokenModule } from "../JwtToken/jwtToken.module";

@Module({
  imports: [PrismaModule, MailModule, JwtTokenModule],
  providers: [UsersService],
  controllers: [UsersController],
  exports: [UsersService],
})
export class UsersModule {}
