import { Users } from './entities/user.entity';
import { AuthGuard } from '../../common/guard/auth.guard';
import { WebResponse } from '../../common/dto/web.dto';
import { UsersService } from './users.service';
import { AuthDecorator } from '../../common/decorator/auth.decorator';
import { ApiOperation, ApiSecurity, ApiTags } from '@nestjs/swagger';
import {
  SignInUsersRequest,
  SignInUsersResponse,
  SignUpUsersRequest,
  SignUpUsersResponse,
  UpdatePasswordRequest,
  UsersResponse,
} from './dto/users.dto';
import {
  Controller,
  Post,
  Body,
  Get,
  UseGuards,
  Put,
  Delete,
} from '@nestjs/common';

@ApiTags('Users')
@Controller('/api/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/signup')
  @ApiOperation({
    summary: 'Sign Up user',
  })
  public async signUp(
    @Body() req: SignUpUsersRequest,
  ): Promise<{ data: SignUpUsersResponse }> {
    return this.usersService.signUp(req);
  }

  @Post('/signin')
  @ApiOperation({
    summary: 'Sign In user',
  })
  public async signIn(
    @Body() req: SignInUsersRequest,
  ): Promise<{ data: SignInUsersResponse }> {
    return this.usersService.signIn(req);
  }

  @Get()
  @ApiOperation({
    summary: 'Get Data user',
  })
  @ApiSecurity('bearer')
  @UseGuards(AuthGuard)
  public async getUsers(
    @AuthDecorator() user: Users,
  ): Promise<{ data: UsersResponse }> {
    return this.usersService.getUser(user);
  }

  @Put('/update-password')
  @ApiOperation({
    summary: 'Update Password user',
  })
  @ApiSecurity('bearer')
  @UseGuards(AuthGuard)
  public async updatePassword(
    @AuthDecorator() user: Users,
    @Body() req: UpdatePasswordRequest,
  ): Promise<WebResponse> {
    return this.usersService.updatePassword(user, req);
  }

  @Delete('/signout')
  @ApiOperation({
    summary: 'Sign Out user',
  })
  @ApiSecurity('bearer')
  @UseGuards(AuthGuard)
  async signOut(@AuthDecorator() user: Users): Promise<WebResponse> {
    return await this.usersService.signOut(user);
  }
}
