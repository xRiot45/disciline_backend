import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AgamaModule } from './master/agama/agama.module';
import { StatusModule } from './master/status/status.module';
import { TipePelanggaranModule } from './master/tipe-pelanggaran/tipe-pelanggaran.module';

@Module({
  imports: [UsersModule, AgamaModule, TipePelanggaranModule, StatusModule],
})
export class ApiModule {}
