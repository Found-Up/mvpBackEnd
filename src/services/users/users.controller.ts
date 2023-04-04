/* This is a preliminary service. WILL CHANGE IN THE FUTURE ONCE WE FLESH OUT ER DIAGRAMS */

import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { User } from './entity/users.entity';
import { IUserService } from './interface/user.service.interface';
import { CreateUserDto } from './dto/create-user.dto';
import { DeleteResult, FindOptionsWhere } from 'typeorm';
import { JwtAuthenticationGuard } from '../authentication/authentication.guard.jwt';
@Controller('UserService')
export class UsersController {
  constructor(
    @Inject('IUserService')
    private readonly usersService: IUserService,
  ) {}

  @Post('CreateUser')
  public async createUser(@Body() userDto: CreateUserDto): Promise<User> {
    return await this.usersService.createUser(userDto);
  }

  @UseGuards(JwtAuthenticationGuard)
  @Get('GetAllUsers')
  public async getAll(): Promise<User[]> {
    return await this.usersService.getAll();
  }

  @Get('GetById/:id')
  public async getById(@Param('id') id: number): Promise<User> {
    return await this.usersService.getById(id);
  }

  @Get('GetByCondition')
  public async getByCondition(
    filterCondition: FindOptionsWhere<User>,
  ): Promise<User[]> {
    return await this.usersService.getByCondition(filterCondition);
  }

  @Get('GetUser')
  public async getUserForAuthentication(
    @Body('email') email: string,
  ): Promise<User> {
    return await this.usersService.getUserForAuthentication(email);
  }

  @Delete('DeleteUser/:id')
  public async delete(@Param('id') id: string): Promise<DeleteResult> {
    return await this.usersService.delete(id);
  }
}
