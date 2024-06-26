import * as bcrypt from 'bcrypt';
import { Users } from './entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { EntityManager } from 'typeorm';
import { UsersValidation } from './users.validation';
import { ValidationService } from 'src/common/validation/validation.service';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { SignUpUsersDtoRequest, SignUpUsersDtoResponse } from './dto/users.dto';

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
}
