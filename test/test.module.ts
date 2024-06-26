import { Module } from '@nestjs/common';
import { UsersTestService } from './users/usersTest.service';

@Module({
  providers: [UsersTestService],
})
export class TestModule {}
