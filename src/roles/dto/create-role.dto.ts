import { ApiProperty } from "@nestjs/swagger"; 

export class CreateRoleDto {
    @ApiProperty({example: 'ADMIN', description: 'User role value'})
    readonly value: string;

    @ApiProperty({example: 'Administrator', description: 'User role description'})
    readonly description: string;
}