import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({example: 'user@mail.com', description: 'User email'})
    readonly email: string;

    @ApiProperty({example: '12345', description: 'User password'})
    readonly password: string;
}