import { Inject, Injectable } from '@nestjs/common';
import { User } from './entity/users.entity';
import { IUserRepository } from './interface/user.repository.interface';
import { IUserService } from './interface/user.service.interface';
import { CreateUserDto } from './dto/create-user.dto';
import { DeleteResult } from 'typeorm';

@Injectable()
export class UserService implements IUserService {
  constructor(
    @Inject('IUserRepository')
    private readonly userRepository: IUserRepository,
  ) {}

  public async createUser(userDto: CreateUserDto): Promise<User> {
    const user = new User();
    user.firstName = userDto.firstName;
    user.lastName = userDto.lastName;
    user.email = userDto.email;
    user.password = userDto.password;
    user.createdAt = Date.now();
    user.updatedAt = null;
    user.isActive = false;
    return this.userRepository.create(user);
  }

  public async getAll(): Promise<User[]> {
    return this.userRepository.getAll();
  }
  public async getById(id: number) {
    return this.userRepository.getById({
      where: {
        id: id,
      },
    });
  }
  public async delete(id: string): Promise<DeleteResult> {
    return this.userRepository.delete(id);
  }
}
