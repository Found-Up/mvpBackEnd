import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ormConfig } from './datasources/config/ormconfig';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VideosModule } from './services/videos/videos.module';
import { QuestionsModule } from './services/questions/questions.module';
import { UsersModule } from './services/users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(ormConfig()),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    VideosModule,
    QuestionsModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
