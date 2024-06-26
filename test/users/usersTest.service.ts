import { Injectable } from '@nestjs/common';
import { EntityManager } from 'typeorm';

@Injectable()
export class UsersTestService {
  constructor(private readonly entityManager: EntityManager) {}

  public async signUp() {
    await this.entityManager.save({
      username: 'test',
      password: 'test',
    });
  }
}
