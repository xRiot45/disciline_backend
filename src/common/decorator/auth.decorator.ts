import {
  HttpStatus,
  HttpException,
  ExecutionContext,
  createParamDecorator,
} from '@nestjs/common';

export const AuthDecorator = createParamDecorator(
  (data: unknown, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();
    const user = request.user;

    if (user) {
      return user;
    } else {
      throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    }
  },
);
