import { UsersService } from './users.service';
import { Controller, Post, Body } from '@nestjs/common';
import { SignUpUsersDtoRequest, SignUpUsersDtoResponse } from './dto/users.dto';

@Controller('/api/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/signup')
  public async signUp(
    @Body() signUpUserDtoRequest: SignUpUsersDtoRequest,
  ): Promise<{ data: SignUpUsersDtoResponse }> {
    return this.usersService.signUp(signUpUserDtoRequest);
  }
}
