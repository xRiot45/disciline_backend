import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AgamaModule } from './master/agama/agama.module';
import { StatusModule } from './master/status/status.module';
import { JabatanModule } from './master/jabatan/jabatan.module';
import { GolonganModule } from './master/golongan/golongan.module';
import { TipePelanggaranModule } from './master/tipe-pelanggaran/tipe-pelanggaran.module';
import { PendidikanModule } from './master/pendidikan/pendidikan.module';
import { JurusanModule } from './master/jurusan/jurusan.module';
import { GuruModule } from './guru/guru.module';

@Module({
  imports: [
    UsersModule,
    AgamaModule,
    TipePelanggaranModule,
    StatusModule,
    JabatanModule,
    GolonganModule,
    PendidikanModule,
    JurusanModule,
    GuruModule,
  ],
})
export class ApiModule {}
