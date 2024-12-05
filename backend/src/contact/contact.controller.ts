import { Body, Controller, Post } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import * as ejs from "ejs";
import MailService from "../mail/mail.service";
import { CreateContactDto } from "./create-contact.dto";

@Controller("contact")
export class ContactController {
  private readonly serverEmail;

  constructor(
    private mailService: MailService,
    private configService: ConfigService,
  ) {
    this.serverEmail = configService.get<string>("EMAIL");
  }

  @Post("/")
  async putInContact(
    @Body() createContactDto: CreateContactDto,
  ): Promise<{ message: string }> {
    const { username, email, message } = createContactDto;

    const informationHtml = await ejs.renderFile(
      "src/contact/views/contact-informations-template-email.ejs",
      { username, message, email },
    );

    await this.mailService.sendEmail(
      this.serverEmail,
      "Toffolon - Nouveau contact !",
      informationHtml,
    );

    const confirmationHtml = await ejs.renderFile(
      "./src/contact/views/contact-template-email.ejs",
      { username },
    );

    await this.mailService.sendEmail(
      email,
      `Toffolon - Prise de contact`,
      confirmationHtml,
    );

    return { message: "Votre message a été envoyé" };
  }
}
