import { Inject, Injectable } from '@nestjs/common';
import { NCU } from './entity/ncu.entity';
import { INcuRepository } from './interface/ncu.repository.interface';
import { INcuService } from './interface/ncu.service.interface';
import { CreateNcuDto } from './dto/create-ncu.dto';
import { UpdateNcuDto } from './dto/update-ncu.dto';
import { StoredProcedures } from 'src/constant/StoredProcedures';

@Injectable()
export class NcuService implements INcuService {
  constructor(
    @Inject('INcuRepository')
    private readonly ncuRepository: INcuRepository,
  ) {}

  public async createNCU(newNcuUser: CreateNcuDto): Promise<NCU> {
    const newNcu = new NCU();
    newNcu.user_id = newNcuUser.user_id;
    newNcu.biography = newNcuUser.biography;
    newNcu.headline = newNcuUser.headline;
    newNcu.github_link = newNcuUser.github_link;
    newNcu.portfolio_link = newNcuUser.portfolio_link;
    return this.ncuRepository.create(newNcu);
  }

  public async getUserExperience(ncu_id: number): Promise<NCU> {
    return this.ncuRepository.callStoredProcedure(
      StoredProcedures.SP_GETNCUEXPERIENCE,
      [ncu_id],
    );
  }
  public async getUserEducation(ncu_id: number): Promise<NCU> {
    return this.ncuRepository.callStoredProcedure(
      StoredProcedures.SP_GETNCUEDUCATION,
      [ncu_id],
    );
  }
  public async getUserSkills(ncu_id: number): Promise<NCU> {
    return this.ncuRepository.callStoredProcedure(
      StoredProcedures.SP_GETNCUSKILLS,
      [ncu_id],
    );
  }
  public async updateUserProfile(updateDto: UpdateNcuDto): Promise<NCU> {
    throw new Error('Method not implemented.');
  }
}
