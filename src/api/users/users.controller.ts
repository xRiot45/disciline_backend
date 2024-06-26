import { Users } from './entities/user.entity';
import { AuthGuard } from 'src/common/guard/auth.guard';
import { WebResponse } from 'src/common/dto/web.dto';
import { UsersService } from './users.service';
import { AuthDecorator } from 'src/common/decorator/auth.decorator';
import { Controller, Post, Body, Get, UseGuards, Put } from '@nestjs/common';
import {
  SignInUsersDtoRequest,
  SignInUsersDtoResponse,
  SignUpUsersDtoRequest,
  SignUpUsersDtoResponse,
  UpdatePasswordDtoRequest,
  UsersDtoResponse,
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

  @Get()
  @UseGuards(AuthGuard)
  public async getUsers(
    @AuthDecorator() user: Users,
  ): Promise<{ data: UsersDtoResponse }> {
    return this.usersService.getUser(user);
  }

  @Put('/update-password')
  @UseGuards(AuthGuard)
  public async updatePassword(
    @AuthDecorator() user: Users,
    @Body() req: UpdatePasswordDtoRequest,
  ): Promise<WebResponse> {
    return this.usersService.updatePassword(user, req);
  }
}
