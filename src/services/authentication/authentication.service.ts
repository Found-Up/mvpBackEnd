import { Inject, Injectable } from '@nestjs/common';
import { IUserService } from '../users/interface/user.service.interface';
import { JwtService } from '@nestjs/jwt';
import { hashSync, genSaltSync, compare } from 'bcrypt';

@Injectable()
export class AuthenticationService {
  constructor(
    @Inject('IUserService')
    private readonly userService: IUserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.userService.getUserForAuthentication(username);
    const comparePass = await this.hashGivenPassword(pass);
    const userType = await this.userService.getUserType(user.user_id);
    user.user_type = userType[0][0].user_type;
    if (user && compare(user.password, comparePass)) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  public async login(user: any) {
    const payload = { username: user.email, sub: user.user_id };
    return {
      id: user.user_id,
      access_token: this.jwtService.sign(payload),
      user_type: user.user_type,
    };
  }

  private async hashGivenPassword(password: string): Promise<string> {
    return await hashSync(password, genSaltSync(10));
  }
}
