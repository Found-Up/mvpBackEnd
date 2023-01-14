import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VideosModule } from './videos/videos.module';
import { QuestionsModule } from './questions/questions.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test',
      entities: [],
      synchronize: true,
  }),
    VideosModule, QuestionsModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
