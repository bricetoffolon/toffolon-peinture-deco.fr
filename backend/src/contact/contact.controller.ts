import { Body, Controller, Post } from '@nestjs/common';
import MailService from "../mail/mail.service";
import { CreateContactDto } from "./create-contact.dto";
import { ConfigService } from "@nestjs/config";
import * as ejs from 'ejs';

@Controller('contact')
export class ContactController {
    private readonly serverEmail;

    constructor(
        private mailService: MailService,
        private configService: ConfigService
    ) {
        this.serverEmail = configService.get<string>('EMAIL');
    }

    @Post('/')
    async putInContact( @Body() createContactDto: CreateContactDto): Promise<{ message: string }> {
        const { last_name, first_name, email, message } = createContactDto;

        const username = `${first_name} ${last_name}`

        const informationHtml = await ejs.renderFile(
            "src/contact/views/contact-informations-template-email.ejs",
            {"username": username, "message": message, "email": email }
        )

        await this.mailService.sendEmail(this.serverEmail, "Toffolon - Nouveau contact !", informationHtml)

        const confirmationHtml = await ejs.renderFile(
            "./src/contact/views/contact-template-email.ejs",
            {"username": username},
        );

        await this.mailService.sendEmail(email, `Toffolon - Prise de contact`, confirmationHtml);

        return {"message": "Votre message a été envoyé"}
    }
}
