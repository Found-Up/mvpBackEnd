/* This is a preliminary service. WILL CHANGE IN THE FUTURE ONCE WE FLESH OUT ER DIAGRAMS */

import { Controller, Delete, Get, Post } from '@nestjs/common';
import { User } from './users.entity';
import { UsersService } from './users.service';

@Controller()
export class UsersController {
    constructor(private readonly usersService: UsersService){}

    @Get()
    findAll(): Promise<User[]> {
    return this.usersService.findAll();
    }

    @Get()
    findOne(id: number): Promise<User> {
    return this.usersService.findOne(id);
    }

    @Delete()
    remove(id: string): Promise<void> {
        return this.usersService.remove(id);
    }
  
  
}
