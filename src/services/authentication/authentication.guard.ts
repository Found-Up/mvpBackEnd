import { Injectable } from '@nestjs/common/decorators';
import { AuthGuard as PassportAuthGuard } from '@nestjs/passport';

@Injectable()
export class AuthenticationGuard extends PassportAuthGuard('jwt') {}
