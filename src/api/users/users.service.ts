import * as bcrypt from 'bcrypt';
import { Users } from './entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { WebResponse } from '../../common/dto/web.dto';
import { EntityManager } from 'typeorm';
import { UsersValidation } from './users.validation';
import { ValidationService } from '../../common/validation/validation.service';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import {
  SignInUsersRequest,
  SignInUsersResponse,
  SignUpUsersRequest,
  SignUpUsersResponse,
  UpdatePasswordRequest,
  UsersResponse,
} from './dto/users.dto';

@Injectable()
export class UsersService {
  constructor(
    private readonly entityManager: EntityManager,
    private validationService: ValidationService,
    private jwtService: JwtService,
  ) {}

  public async signUp(
    req: SignUpUsersRequest,
  ): Promise<{ data: SignUpUsersResponse }> {
    const signupRequest = this.validationService.validate(
      UsersValidation.SIGNUP,
      req,
    );

    // Username exists check
    const usernameExists = await this.entityManager.findOne(Users, {
      where: {
        username: signupRequest.username,
      },
    });

    if (usernameExists) {
      throw new HttpException('Username already exists', HttpStatus.CONFLICT);
    }

    signupRequest.password = await bcrypt.hash(signupRequest.password, 12);
    signupRequest.role = 'admin';

    const user = new Users({
      ...signupRequest,
    });

    const signupUsers = await this.entityManager.save(user);
    return {
      data: {
        id: signupUsers.id,
        username: signupUsers.username,
        role: signupUsers.role,
      },
    };
  }

  public async signIn(
    req: SignInUsersRequest,
  ): Promise<{ data: SignInUsersResponse }> {
    const signinRequest = this.validationService.validate(
      UsersValidation.SIGNIN,
      req,
    );

    const user = await this.entityManager.findOne(Users, {
      where: {
        username: signinRequest.username,
      },
    });

    if (user && (await bcrypt.compare(signinRequest.password, user.password))) {
      const payload = {
        id: user.id,
        username: user.username,
        role: user.role,
      };

      const token = this.jwtService.sign(payload);
      return {
        data: {
          accessToken: token,
        },
      };
    } else {
      throw new HttpException(
        'Username or Password Invalid',
        HttpStatus.UNAUTHORIZED,
      );
    }
  }

  public async getUser(user: Users): Promise<{ data: UsersResponse }> {
    const dataUser = await this.entityManager.findOne(Users, {
      where: {
        id: user.id,
      },
    });

    return {
      data: {
        id: dataUser.id,
        username: dataUser.username,
        role: dataUser.role,
      },
    };
  }

  public async updatePassword(
    user: Users,
    req: UpdatePasswordRequest,
  ): Promise<WebResponse> {
    const updateRequest = this.validationService.validate(
      UsersValidation.UPDATE,
      req,
    );

    const findUser = await this.entityManager.findOne(Users, {
      where: { id: user.id },
    });

    if (findUser.password) {
      user.password = await bcrypt.hash(updateRequest.password, 12);
    }

    await this.entityManager.update(Users, findUser.id, {
      password: user.password,
    });

    return {
      message: 'Password updated',
    };
  }

  public async signOut(user: Users): Promise<WebResponse> {
    const signOutRequest = await this.entityManager.findOne(Users, {
      where: { id: user.id },
    });

    if (!signOutRequest) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    return {
      message: 'Sign out success',
    };
  }
}
