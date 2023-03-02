import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/users.entity';
import { UsersController } from './users.controller';
import { UserRepository } from 'src/repositories/user.repository';
import { IUserRepository } from './interface/user.repository.interface';
import { UserService } from './users.service';
import { IUserService } from './interface/user.service.interface';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [
    {
      provide: 'IUserRepository',
      useClass: UserRepository,
    },
    {
      provide: 'IUserService',
      useClass: UserService,
    },
  ],
  controllers: [UsersController],
})
export class UsersModule {}
