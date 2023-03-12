import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Question } from './entity/questions.entity';
import { QuestionsController } from './questions.controller';
import { IQuestionRepository } from './interface/questions.repository.interface';
import { QuestionRepository } from 'src/repositories/questions.repository';
import { IQuestionService } from './interface/questions.service.interface';
import { QuestionsService } from './questions.service';

@Module({
  imports: [TypeOrmModule.forFeature([Question])],
  providers: [
    {
      provide: 'IQuestionRepository',
      useClass: QuestionRepository,
    },
    {
      provide: 'IQuestionService',
      useClass: QuestionsService,
    },
  ],
  controllers: [QuestionsController],
})
export class QuestionsModule {}
