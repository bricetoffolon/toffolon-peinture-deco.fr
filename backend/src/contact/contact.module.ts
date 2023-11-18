import { Module } from '@nestjs/common';
import { ContactController } from './contact.controller';
import {MailModule} from "../mail/mail.module";
import {ConfigModule} from "@nestjs/config";
import {ThrottlerGuard} from "@nestjs/throttler";
import {APP_GUARD} from "@nestjs/core";

@Module({
  controllers: [ContactController],
  imports: [MailModule, ConfigModule],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ]
})
export class ContactModule {}
