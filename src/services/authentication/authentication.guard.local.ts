import { Injectable } from '@nestjs/common/';
import { AuthGuard as PassportAuthGuard } from '@nestjs/passport';

@Injectable()
export class LocalAuthenticationGuard extends PassportAuthGuard('local') {}
