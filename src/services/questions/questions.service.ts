import { Inject, Injectable } from '@nestjs/common';
import { Question } from './entity/questions.entity';
import { IQuestionRepository } from './interface/questions.repository.interface';
import { IQuestionService } from './interface/questions.service.interface';
import { CreateQuestionDto } from './dto/CreateQuestion.dto';
import { UpdateQuestionDto } from './dto/UpdateQuestion.dto';
import { DeleteResult, UpdateResult } from 'typeorm';

@Injectable()
export class QuestionsService implements IQuestionService {
  constructor(
    @Inject('IQuestionRepository')
    private readonly questionRepository: IQuestionRepository,
  ) {}

  public async createQuestion(
    createQuestionDto: CreateQuestionDto,
  ): Promise<Question> {
    const question = new Question();
    question.company_id = createQuestionDto.companyId;
    question.question_text = createQuestionDto.questionText;
    question.created_by = createQuestionDto.createdBy;
    const currDateTime = Date.now();
    const dateTime = new Date(currDateTime);
    question.created_at = dateTime.toISOString();
    question.end_date = new Date(createQuestionDto.duration);
    question.active_status = createQuestionDto.status;
    return this.questionRepository.create(question);
  }

  public async getAll(): Promise<Question[]> {
    return this.questionRepository.getAll();
  }

  public async getById(id: number): Promise<Question> {
    return this.questionRepository.getById({
      where: {
        question_id: id,
      },
    });
  }

  public async delete(id: string): Promise<DeleteResult> {
    return this.questionRepository.delete(id);
  }

  public async updateQuestion(
    updateQuestionDto: UpdateQuestionDto,
  ): Promise<UpdateResult> {
    return this.questionRepository.update(
      {
        question_id: updateQuestionDto.questionId,
      },
      {
        question_text: updateQuestionDto.questionText,
        end_date: updateQuestionDto.duration,
        active_status: updateQuestionDto.status,
        updated_by: updateQuestionDto.updatedBy,
      },
    );
  }
}
