import { BaseAbstractRepository } from './base/base.abstract.repository';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { NCU } from 'src/services/ncu/entity/ncu.entity';
import { INcuRepository } from 'src/services/ncu/interface/ncu.repository.interface';

@Injectable()
export class NcuRepository
  extends BaseAbstractRepository<NCU>
  implements INcuRepository
{
  constructor(
    @InjectRepository(NCU)
    private readonly ncuRepository: Repository<NCU>,
  ) {
    super(ncuRepository);
  }
}
