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
    async putInContact( @Body() createContactDto: CreateContactDto) {
        const { last_name, first_name, email, phone_number, which_benefit, how_you_heard_about_us, message } = createContactDto;

        await this.mailService.sendEmail(email, which_benefit, `New contact from <br/><strong>${first_name} ${last_name}<br/><br/></strong>phone number: <br><strong>${phone_number}<br/><br/></strong><br/>email: <br/><strong>${email}</strong><br/><br/> This person heard about you by: <br/><strong>${how_you_heard_about_us}</strong><br/><br/>Contact message:<strong><br/>${message}</strong>`)

        await this.mailService.sendEmail(email, `Update on your inquiry`, 'Hey, we successfully received your contact demand, we will come back to you soon');
    }
}
