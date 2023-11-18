import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { MailModule } from "./mail/mail.module";
import { JwtTokenModule } from './JwtToken/jwtToken.module';
import { PostModule } from './post/post.module';
import { ContactModule } from './contact/contact.module';
import { StartModule } from "./start/start.module";
import {ThrottlerModule} from "@nestjs/throttler";

@Module({
  imports: [
    AuthModule,
    MailModule,
    UsersModule,
    PrismaModule,
    JwtTokenModule,
    PostModule,
    ContactModule,
    StartModule,
    ThrottlerModule.forRoot([{
      ttl: 6000,
      limit: 10,
    }])],
  controllers: [],
})
export class AppModule {}
