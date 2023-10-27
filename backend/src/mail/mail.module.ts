import { Module } from '@nestjs/common';

import MailService from "./mail.service";
import { SendgridService } from "./sendgrid.service";
import { ConfigModule } from "@nestjs/config";

@Module({
    imports: [ConfigModule.forRoot()],
    providers: [MailService, SendgridService],
    exports: [MailService]
})
export class MailModule {}
