import { Siswa } from './entities/siswa.entity';
import { Module } from '@nestjs/common';
import { UsersModule } from '../users/users.module';
import { SiswaService } from './siswa.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SiswaController } from './siswa.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Siswa]), UsersModule],
  controllers: [SiswaController],
  providers: [SiswaService],
})
export class SiswaModule {}
