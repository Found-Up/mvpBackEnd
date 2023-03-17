import { Inject, Injectable } from '@nestjs/common';
import { IUserService } from '../users/interface/user.service.interface';
import { hashSync, genSaltSync } from 'bcrypt';

@Injectable()
export class AuthenticationService {
  constructor(
    @Inject('IUserService')
    private readonly userService: IUserService,
  ) {}

  public async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.userService.getByCondition({
      email: email,
    });
    const comparePass = await this.hashGivenPassword(pass);
    if (user[0] && user[0].password === comparePass) {
      const [firstUser, ...restUsers] = user;
      const { password, ...result } = firstUser;
      return result;
    }
    return null;
  }

  private async hashGivenPassword(password: string): Promise<string> {
    return await hashSync(password, genSaltSync(10));
  }
}
