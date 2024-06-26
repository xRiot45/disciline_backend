import { Users } from './entities/user.entity';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from '../../common/strategy/jwt.strategy';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
import { UsersController } from './users.controller';
import { ValidationService } from '../../common/validation/validation.service';

@Module({
  exports: [JwtStrategy, JwtModule],
  imports: [
    TypeOrmModule.forFeature([Users]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: `${process.env.JWT_SECRET}`,
      signOptions: {
        expiresIn: 60 * 60 * 24,
      },
    }),
  ],
  controllers: [UsersController],
  providers: [UsersService, ValidationService, JwtStrategy],
})
export class UsersModule {}
