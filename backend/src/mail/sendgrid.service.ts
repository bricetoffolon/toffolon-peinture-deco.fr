import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import * as SendGrid from "@sendgrid/mail";

@Injectable()
export class SendgridService {
    constructor (
        private readonly configService: ConfigService
    ) {
        SendGrid.setApiKey(configService.get<string>('SEND_GRID_KEY'));
    }

    async sendEmail(mail: SendGrid.MailDataRequired): Promise<SendGrid.ClientResponse> {
        const transport = await SendGrid.send(mail);

        return transport[0]
    }
}