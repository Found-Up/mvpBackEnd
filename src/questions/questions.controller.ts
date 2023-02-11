/* This is a preliminary service. WILL CHANGE IN THE FUTURE ONCE WE FLESH OUT ER DIAGRAMS */

/* HAVE TO MAKE QUESTION DTO OBJECT */

import { Controller, Delete, Get, Post } from '@nestjs/common';
import { Question } from './questions.entity';
import { QuestionsService } from './questions.service';

@Controller()
export class QuestionsController {
    constructor(private readonly questionsService: QuestionsService){}
    
    @Post()
    async createQuestion(@Body() createQuestionDto: CreateQuestionDto) {
        return this.questionsService.createQuestion(createQuestionDto);
    }


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