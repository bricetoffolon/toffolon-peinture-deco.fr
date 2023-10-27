import { Controller, Post } from '@nestjs/common';
import { ConfigService } from "@nestjs/config";
import { UsersService } from "../users/users.service";
import MailService from "../mail/mail.service";
import { AuthTokenService } from "../JwtToken/JWTToken.service";


@Controller('start')
export class StartController {
    private readonly emailFirstUser;
    constructor(
        private readonly configService: ConfigService,
        private readonly usersService: UsersService,
        private readonly mailService: MailService,
        private readonly authTokenService: AuthTokenService,
    ) {
        this.emailFirstUser = configService.get<string>("FIRST_EMAIL_USER");
    }
    @Post('/')
    async startAPI(): Promise<void> {
        const user = await this.usersService.user({"email": this.emailFirstUser});

        if (!user) {
            await this.mailService.sendUserCreateMail(this.emailFirstUser, await this.authTokenService.genAuthToken(this.emailFirstUser, "0"));
        }
    }
}
