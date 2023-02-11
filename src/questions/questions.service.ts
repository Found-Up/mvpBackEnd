import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InsertValuesMissingError, Repository } from 'typeorm';
import { Question } from './questions.entity';

@Injectable()
export class QuestionsService {
  constructor(
    @InjectRepository(Question)
    private usersRepository: Repository<Question>,
  ) {}

  async createQuestion(createQuestionDto: CreateQuestionDto): Promise<Question> {
    // implementation to create a new question using the data from createQuestionDto
    const newQuestion = {
      // example properties, replace with actual properties as needed
      id: Date.now(),
      Company: createQuestionDto.Company,
      Question: createQuestionDto.Question,
      Role: createQuestionDto.Role,
      isActive: createQuestionDto.isActive,
    };

    return newQuestion;
  }

  findAll(): Promise<Question[]> {
    return this.usersRepository.find();
  }

  findOne(id: number): Promise<Question> {
    return this.usersRepository.findOneBy({ id });
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}