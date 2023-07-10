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
            html: `<h1>${object}<h1>`
        }

        return await this.sendGridService.sendEmail(mail);
    }

    async sendVerificationMail(userEmail: string, accessToken: string) {
        console.log(userEmail, accessToken);

        return this.sendEmail(
            userEmail, "Verifier votre addresse email", `${this.serverRoute}/user/verify?key=${accessToken}`
        )
    }
}

