import { BaseAbstractRepository } from './base/base.abstract.repository';
import { Injectable } from '@nestjs/common/decorators/core/injectable.decorator';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Question } from 'src/services/questions/entity/questions.entity';
import { IQuestionRepository } from 'src/services/questions/interface/questions.repository.interface';

@Injectable()
export class QuestionRepository
  extends BaseAbstractRepository<Question>
  implements IQuestionRepository
{
  constructor(
    @InjectRepository(Question)
    private readonly questionRepository: Repository<Question>,
  ) {
    super(questionRepository);
  }
}
