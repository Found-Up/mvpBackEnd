import { IBaseInterfaceRepository } from 'src/repositories/base/base.interface.repository';
import { Question } from '../entity/questions.entity';

export interface IQuestionRepository
  extends IBaseInterfaceRepository<Question> {}
