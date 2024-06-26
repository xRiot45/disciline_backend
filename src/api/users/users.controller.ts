import { UsersService } from './users.service';
import { Controller, Post, Body } from '@nestjs/common';
import {
  SignInUsersDtoRequest,
  SignInUsersDtoResponse,
  SignUpUsersDtoRequest,
  SignUpUsersDtoResponse,
} from './dto/users.dto';

@Controller('/api/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/signup')
  public async signUp(
    @Body() req: SignUpUsersDtoRequest,
  ): Promise<{ data: SignUpUsersDtoResponse }> {
    return this.usersService.signUp(req);
  }

  @Post('/signin')
  public async signIn(
    @Body() req: SignInUsersDtoRequest,
  ): Promise<{ data: SignInUsersDtoResponse }> {
    return this.usersService.signIn(req);
  }
}
