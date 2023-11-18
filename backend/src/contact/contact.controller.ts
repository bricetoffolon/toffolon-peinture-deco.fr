import { Body, Controller, Post } from '@nestjs/common';
import MailService from "../mail/mail.service";
import { CreateContactDto } from "./create-contact.dto";
import { ConfigService } from "@nestjs/config";

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

        await this.mailService.sendEmail(email, "New contact !", `New contact from <br/><strong>${first_name} ${last_name}</strong><br/>email: <br/><strong>${email}</strong>Contact message:<br/>${message}</strong>`)

        await this.mailService.sendEmail(email, `Update on your inquiry`, 'Hey, we successfully received your contact demand, we will come back to you soon');

        return {"message": "Votre message a été envoyé"}
    }
}
