import { Inject, Injectable } from '@nestjs/common';
import { User } from './entity/users.entity';
import { IUserRepository } from './interface/user.repository.interface';
import { IUserService } from './interface/user.service.interface';
import { CreateUserDto } from './dto/create-user.dto';
import { DeleteResult, FindOptionsWhere } from 'typeorm';
import { StoredProcedures } from 'src/constant/StoredProcedures';

@Injectable()
export class UserService implements IUserService {
  constructor(
    @Inject('IUserRepository')
    private readonly userRepository: IUserRepository,
  ) {}

  public async createUser(userDto: CreateUserDto): Promise<User> {
    const user = new User();
    user.first_name = userDto.firstName;
    user.last_name = userDto.lastName;
    user.email = userDto.email;
    user.password = userDto.password;
    user.created_at = Date.now();
    user.updated_at = null;
    user.active = false;
    return this.userRepository.create(user);
  }

  public async getAll(): Promise<User[]> {
    return this.userRepository.getAll();
  }
  public async getById(id: number) {
    return this.userRepository.getById({
      where: {
        user_id: id,
      },
    });
  }

  public async getByCondition(
    filterCondition: FindOptionsWhere<User>,
  ): Promise<User[]> {
    return this.userRepository.getByCondition(filterCondition);
  }

  public async getUserForAuthentication(email: string): Promise<User> {
    return this.userRepository.getOneByCondition({
      email: email,
    });
  }

  public async getUserType(id: number): Promise<User> {
    return this.userRepository.callStoredProcedure(
      StoredProcedures.SP_GETUSERTYPE,
      [id],
    );
  }

  public async delete(id: string): Promise<DeleteResult> {
    return this.userRepository.delete(id);
  }
}
