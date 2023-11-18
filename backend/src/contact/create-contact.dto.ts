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
    message: string
}