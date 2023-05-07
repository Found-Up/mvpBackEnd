import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import ormconfig from './datasources/config/ormconfig';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './services/users/users.module';
import { QuestionsModule } from './services/questions/questions.module';
import { AuthenticationModule } from './services/authentication/authentication.module';
import { NcuModule } from './services/ncu/ncu.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: ormconfig,
      inject: [ConfigService],
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    UsersModule,
    QuestionsModule,
    AuthenticationModule,
    NcuModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
