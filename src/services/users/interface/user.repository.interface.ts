import { IBaseInterfaceRepository } from '../../../repositories/base/base.interface.repository';
import { User } from '../entity/users.entity';

export interface IUserRepository extends IBaseInterfaceRepository<User> {}
