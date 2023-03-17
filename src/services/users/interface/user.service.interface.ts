import { User } from '../entity/users.entity';
import { CreateUserDto } from '../dto/create-user.dto';
import { DeleteResult, FindOptionsWhere } from 'typeorm';

export interface IUserService {
  createUser(userDto: CreateUserDto): Promise<User>;
  getAll(): Promise<User[]>;
  getById(id: number): Promise<User>;
  getByCondition(filterCondition: FindOptionsWhere<User>): Promise<User[]>;
  getByEmail(emailCondition: FindOptionsWhere<User>): Promise<User>;
  delete(id: string): Promise<DeleteResult>;
}
