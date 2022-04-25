import { ApiProperty } from "@nestjs/swagger";
import { IsString, Length, IsEmail } from "class-validator";

export class CreateUserDto {
    @ApiProperty({example: 'user@mail.com', description: 'User email'})
    @IsString({message: 'Must be a string'})
    @IsEmail({}, {message: 'Incorrect Email'})
    readonly email: string;

    @ApiProperty({example: '12345', description: 'User password'})
    @IsString({message: 'Must be a string'})
    @Length(4, 16, {message: 'No less than 4 and no more than 16'})
    readonly password: string;
}