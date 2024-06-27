import { JwtService } from '@nestjs/jwt';
import {
  Injectable,
  HttpStatus,
  CanActivate,
  HttpException,
  ExecutionContext,
} from '@nestjs/common';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  canActivate(context: ExecutionContext): boolean | Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = request.headers.authorization?.split(' ')[1];

    if (!token) {
      throw new HttpException('Token not found', HttpStatus.UNAUTHORIZED);
    }

    const decodedToken = this.jwtService.verify(token);
    if (decodedToken.role !== 'admin') {
      throw new HttpException('Forbidden access', HttpStatus.FORBIDDEN);
    }

    return true;
  }
}
