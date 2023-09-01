import { Module } from '@nestjs/common';
import { StartController } from './start.controller';
import { ConfigModule } from "@nestjs/config";
import { UsersModule } from "../users/users.module";
import { MailModule } from "../mail/mail.module";
import { JwtTokenModule } from "../JwtToken/jwtToken.module";


@Module({
  imports: [ConfigModule.forRoot(), UsersModule, MailModule, JwtTokenModule],
  controllers: [StartController],
})
export class StartModule {}
