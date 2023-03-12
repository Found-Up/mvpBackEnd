import { Question } from '../entity/questions.entity';
import { CreateQuestionDto } from '../dto/CreateQuestion.dto';
import { UpdateQuestionDto } from '../dto/updateQuestion.dto';
import { DeleteResult, UpdateResult } from 'typeorm';

export interface IQuestionService {
  createQuestion(questionDto: CreateQuestionDto): Promise<Question>;
  getAll(): Promise<Question[]>;
  getById(id: number): Promise<Question>;
  delete(id: string): Promise<DeleteResult>;
  updateQuestion(questionDto: UpdateQuestionDto): Promise<UpdateResult>;
}
