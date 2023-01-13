import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VideoStorageModule } from './videos/videos.module';
import { QuestionStorageModule } from './questions/questions.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [VideoStorageModule, QuestionStorageModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
