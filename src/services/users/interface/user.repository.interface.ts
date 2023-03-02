import { IBaseInterfaceRepository } from 'src/repositories/base/base.interface.repository';
import { User } from '../entity/users.entity';

export interface IUserRepository extends IBaseInterfaceRepository<User> {}
