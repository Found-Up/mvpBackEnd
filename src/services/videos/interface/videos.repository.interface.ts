import { IBaseInterfaceRepository } from 'src/repositories/base/base.interface.repository';
import { Video } from '../entity/videos.entity';

export interface IUserRepository extends IBaseInterfaceRepository<Video> {}