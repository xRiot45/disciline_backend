import { Users } from '../../api/users/entities/user.entity';
import { EntityManager } from 'typeorm';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UnauthorizedException } from '@nestjs/common';

export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly entityManager: EntityManager) {
    super({
      ignoreExpiration: false,
      secretOrKey: `${process.env.JWT_SECRET}`,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }

  public async validate(payload: any): Promise<any> {
    const { username } = payload;
    const user = await this.entityManager.findOne(Users, {
      where: { username },
    });

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
