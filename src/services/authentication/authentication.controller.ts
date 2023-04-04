import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { LocalAuthenticationGuard } from './authentication.guard.local';
import { AuthenticationService } from './authentication.service';

@Controller('AuthService')
export class AuthenticationController {
  constructor(private readonly authService: AuthenticationService) {}

  @UseGuards(LocalAuthenticationGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}
