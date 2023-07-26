import { IsString, IsEmail, IsNotEmpty } from "class-validator";

export class CreateContactDto {
    @IsString()
    @IsNotEmpty()
    last_name: string

    @IsString()
    @IsNotEmpty()
    first_name: string

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email: string

    @IsString()
    @IsNotEmpty()
    phone_number: string

    @IsString()
    which_benefit: string

    @IsString()
    how_you_heard_about_us: string

    @IsString()
    @IsNotEmpty()
    message: string
}