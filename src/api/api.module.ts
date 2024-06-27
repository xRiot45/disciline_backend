import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AgamaModule } from './master/agama/agama.module';

@Module({
  imports: [UsersModule, AgamaModule],
})
export class ApiModule {}
