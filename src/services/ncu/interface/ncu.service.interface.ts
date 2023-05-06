import { CreateNcuDto } from '../dto/create-ncu.dto';
import { UpdateNcuDto } from '../dto/update-ncu.dto';
import { NCU } from '../entity/ncu.entity';

export interface INcuService {
  createNCU(newNcuUser: CreateNcuDto): Promise<NCU>;
  getUserExperience(ncu_id: number): Promise<NCU>;
  getUserEducation(ncu_id: number): Promise<NCU>;
  getUserSkills(ncu_id: number): Promise<NCU>;
  updateUserProfile(updateDto: UpdateNcuDto): Promise<NCU>;
}
