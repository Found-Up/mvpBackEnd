import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VideoService } from './videos.service';
import { ConfigModule } from '@nestjs/config';
import Video from './entity/videos.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Video]), ConfigModule],
  providers: [VideoService],
  exports: [VideoService],
})
export class FilesModule {}