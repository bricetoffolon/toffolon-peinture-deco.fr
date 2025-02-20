import {IsNumber, IsEmail, IsString} from 'class-validator';

export class CreateUserDto {
    @IsEmail()
    email: string;

    @IsString()
    name: string;

    @IsString()
    password: string;
}

export class UserResponseDto {
    constructor(id: number, email: string, name: string, role: string) {
        this.id = id;
        this.email = email;
        this.name = name;
        this.role = role;
    }

    @IsNumber()
    id: number;

    @IsEmail()
    email: string;

    @IsString()
    name: string;

    @IsString()
    role: string;
}