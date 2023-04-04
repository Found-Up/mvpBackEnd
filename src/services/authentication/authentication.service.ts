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
    if (user && compare(user.password, comparePass)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  public async login(user: any) {
    const payload = { username: user.email, sub: user.user_id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  private async hashGivenPassword(password: string): Promise<string> {
    return await hashSync(password, genSaltSync(10));
  }
}
