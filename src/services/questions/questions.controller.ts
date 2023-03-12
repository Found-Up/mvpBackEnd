import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
} from '@nestjs/common';
import { Question } from './entity/questions.entity';
import { IQuestionService } from './interface/questions.service.interface';
import { CreateQuestionDto } from './dto/CreateQuestion.dto';
import { UpdateQuestionDto } from './dto/UpdateQuestion.dto';
import { DeleteResult } from 'typeorm';

@Controller('QuestionService')
export class QuestionsController {
  constructor(
    @Inject('IQuestionService')
    private readonly questionService: IQuestionService,
  ) {}

  @Post('CreateQuestion')
  public async createQuestion(@Body() createQuestionDto: CreateQuestionDto) {
    return this.questionService.createQuestion(createQuestionDto);
  }

  @Get('GetAllQuestions')
  public async getAll(): Promise<Question[]> {
    return this.questionService.getAll();
  }

  @Get('GetById/:id')
  public async getById(@Param('id') id: number): Promise<Question> {
    return this.questionService.getById(id);
  }

  @Delete('DeleteQuestion/:id')
  public async delete(@Param('id') id: string): Promise<DeleteResult> {
    return this.questionService.delete(id);
  }

  @Post('UpdateQuestion')
  public async updateQuestion(@Body() updateQuestionDto: UpdateQuestionDto) {
    return this.questionService.updateQuestion(updateQuestionDto);
  }
}
