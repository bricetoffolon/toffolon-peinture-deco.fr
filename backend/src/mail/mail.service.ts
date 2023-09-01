import { Injectable} from "@nestjs/common";
import { SendgridService } from "./sendgrid.service";
import { ConfigService } from "@nestjs/config";

@Injectable()
export default class MailService {
    private readonly serverEmail;
    private readonly serverRoute;
    constructor(
        private readonly sendGridService: SendgridService,
        private readonly configService: ConfigService,
    ) {
        this.serverEmail = configService.get<string>('EMAIL');
        this.serverRoute = configService.get<string>('API_ROUTE')
    }

    async sendEmail(userEmail: string, subject: string ,object: string) {
        const mail = {
            to: userEmail,
            subject: subject,
            from: this.serverEmail,
            html: `${object}`
        }

        return await this.sendGridService.sendEmail(mail);
    }

    async sendVerificationMail(userEmail: string, accessToken: string) {
        return this.sendEmail(
            userEmail, "Verifier votre addresse email", `<h1>${this.serverRoute}/user/verify?key=${accessToken}<h1>`
        )
    }

    async sendPasswordChangeMail(userEmail: string, accessToken: string) {
        return this.sendEmail(
            userEmail, "Changer votre mot de passe", `<h1>${this.serverRoute}/user/update-password?key=${accessToken}<h1>`
        )
    }

    async sendUserCreateMail(userEmail: string, accessToken: string) {
        return this.sendEmail(
            userEmail, "Créer votre utilisateur", `<h1>${this.serverRoute}/user/?key=${accessToken}<h1>`
        )
    }
}

