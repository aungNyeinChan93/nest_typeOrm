/* eslint-disable prettier/prettier */
import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { CreateUser } from "../schemas/users.zodSchema";


export class CreateUserDto implements CreateUser {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    password: string
}
