/* This is a preliminary service. WILL CHANGE IN THE FUTURE ONCE WE FLESH OUT ER DIAGRAMS */

import { Controller, Delete, Get, Post } from '@nestjs/common';
import { Question } from './questions.entity';
import { QuestionsService } from './questions.service';

@Controller()
export class UsersController {
    constructor(private readonly questionsService: QuestionsService){}

    @Post()
    createQuestion(){}

    @Get()
    findAll(): Promise<Question[]> {
    return this.questionsService.findAll();
    }

    @Get()
    findOne(id: number): Promise<Question> {
    return this.questionsService.findOne(id);
    }

    @Delete()
    remove(id: string): Promise<void> {
        return this.questionsService.remove(id);
    }
  
  
}