import { Module } from '@nestjs/common';
import { GuruModule } from './guru/guru.module';
import { UsersModule } from './users/users.module';
import { AgamaModule } from './master/agama/agama.module';
import { KelasModule } from './kelas/kelas.module';
import { SiswaModule } from './siswa/siswa.module';
import { StatusModule } from './master/status/status.module';
import { JabatanModule } from './master/jabatan/jabatan.module';
import { JurusanModule } from './master/jurusan/jurusan.module';
import { GolonganModule } from './master/golongan/golongan.module';
import { PendidikanModule } from './master/pendidikan/pendidikan.module';
import { PelanggaranModule } from './pelanggaran/pelanggaran.module';
import { TipePelanggaranModule } from './master/tipe-pelanggaran/tipe-pelanggaran.module';

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
    KelasModule,
    SiswaModule,
    PelanggaranModule,
  ],
})
export class ApiModule {}
