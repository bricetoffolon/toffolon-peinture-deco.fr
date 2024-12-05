import { IsString, IsEmail, IsNotEmpty } from "class-validator";

export class CreateContactDto {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  message: string;
}
