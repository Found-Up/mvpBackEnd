import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VideosModule } from './services/videos/videos.module';
import { QuestionsModule } from './services/questions/questions.module';
import { UsersModule } from './services/users/users.module';
import { User } from './services/users/users.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Period10!',
      database: 'test',
      entities: [User],
      synchronize: true,
    }),
    VideosModule,
    QuestionsModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
