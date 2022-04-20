import { Controller, Post, Get, Body, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/auth/roles.auth.decorator';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './users.model';
import { UsersService } from './users.service';
import { RolesGuard } from 'src/auth/roles.guard';


@ApiTags('Users')
@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) {
    
    }

    @ApiOperation({summary: 'Create user'})
    @ApiResponse({status: 200, type:  User})
    @Post()
    create(@Body() userDto: CreateUserDto) {
        return this.usersService.createUser(userDto)
    }

    @ApiOperation({summary: 'Get all users'})
    @ApiResponse({status: 200, type:  [User]})
   // @UseGuards(JwtAuthGuard)
   @Roles('ADMIN')
   @UseGuards(RolesGuard)
    @Get()
    getAll() {
        return this.usersService.getAllUsers()
    }


}
