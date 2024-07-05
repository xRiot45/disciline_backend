import { Siswa } from './entities/siswa.entity';
import { Module } from '@nestjs/common';
import { UsersModule } from '../users/users.module';
import { SiswaService } from './siswa.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SiswaController } from './siswa.controller';
import { ValidationService } from '../../common/validation/validation.service';

@Module({
  imports: [TypeOrmModule.forFeature([Siswa]), UsersModule],
  controllers: [SiswaController],
  providers: [SiswaService, ValidationService],
})
export class SiswaModule {}
