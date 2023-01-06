import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VideoStorageModule } from './video-storage/video-storage.module';
import { QuestionStorageModule } from './question-storage/question-storage.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [VideoStorageModule, QuestionStorageModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
