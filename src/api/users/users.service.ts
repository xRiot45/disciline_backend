import * as bcrypt from 'bcrypt';
import { Users } from './entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { EntityManager } from 'typeorm';
import { UsersValidation } from './users.validation';
import { ValidationService } from 'src/common/validation/validation.service';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import {
  SignInUsersDtoRequest,
  SignInUsersDtoResponse,
  SignUpUsersDtoRequest,
  SignUpUsersDtoResponse,
} from './dto/users.dto';

@Injectable()
export class UsersService {
  constructor(
    private readonly entityManager: EntityManager,
    private validationService: ValidationService,
    private jwtService: JwtService,
  ) {}

  public async signUp(
    req: SignUpUsersDtoRequest,
  ): Promise<{ data: SignUpUsersDtoResponse }> {
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
        id: signupUsers.id.toString(),
        username: signupUsers.username,
        role: signupUsers.role,
      },
    };
  }

  public async signIn(
    req: SignInUsersDtoRequest,
  ): Promise<{ data: SignInUsersDtoResponse }> {
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
}
