import { Module } from '@nestjs/common';
import { ContactController } from './contact.controller';
import {MailModule} from "../mail/mail.module";
import {ConfigModule} from "@nestjs/config";

@Module({
  controllers: [ContactController],
  imports: [MailModule, ConfigModule]
})
export class ContactModule {}
