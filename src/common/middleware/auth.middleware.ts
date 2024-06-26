import { JwtService } from '@nestjs/jwt';
import {
  HttpException,
  HttpStatus,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private jwtService: JwtService) {}

  async use(req: any, res: any, next: () => void) {
    const token = extractTokenFromHeaders(req.headers);

    try {
      const decoded = await this.validateToken(token);
      req.user = decoded;
      next();
    } catch (error) {
      throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
    }
  }

  async validateToken(token: string): Promise<any> {
    return this.jwtService.verify(token);
  }
}

function extractTokenFromHeaders(headers: any): string {
  const authorizationHeader = headers['authorization'];

  if (!authorizationHeader) {
    throw new HttpException(
      'Authorization header is missing',
      HttpStatus.UNAUTHORIZED,
    );
  }

  const token = authorizationHeader.split(' ')[1];
  if (!token) {
    throw new HttpException('Token is missing', HttpStatus.UNAUTHORIZED);
  }

  return token;
}
