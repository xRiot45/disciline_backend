import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AgamaModule } from './master/agama/agama.module';
import { StatusModule } from './master/status/status.module';
import { JabatanModule } from './master/jabatan/jabatan.module';
import { TipePelanggaranModule } from './master/tipe-pelanggaran/tipe-pelanggaran.module';

@Module({
  imports: [
    UsersModule,
    AgamaModule,
    TipePelanggaranModule,
    StatusModule,
    JabatanModule,
  ],
})
export class ApiModule {}
