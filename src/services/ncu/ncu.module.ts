import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NCU } from './entity/ncu.entity';
import { NcuRepository } from 'src/repositories/ncu.repository';
import { INcuRepository } from './interface/ncu.repository.interface';
import { NcuService } from './ncu.service';
import { INcuService } from './interface/ncu.service.interface';
import { NcuController } from './ncu.controller';

@Module({
  imports: [TypeOrmModule.forFeature([NCU])],
  providers: [
    {
      provide: 'INcuRepository',
      useClass: NcuRepository,
    },
    {
      provide: 'INcuService',
      useClass: NcuService,
    },
  ],
  controllers: [NcuController],
})
export class NcuModule {}
