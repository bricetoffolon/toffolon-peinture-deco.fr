import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { MailModule } from "./mail/mail.module";
import { JwtTokenModule } from './JwtToken/jwtToken.module';

@Module({
  imports: [AuthModule, MailModule, UsersModule, PrismaModule, JwtTokenModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
