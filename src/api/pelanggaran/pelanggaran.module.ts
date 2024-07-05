import { Module } from '@nestjs/common';
import { Pelanggaran } from './entities/pelanggaran.entity';
import { UsersModule } from '../users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ValidationService } from '../../common/validation/validation.service';
import { PelanggaranService } from './pelanggaran.service';
import { PelanggaranController } from './pelanggaran.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Pelanggaran]), UsersModule],
  controllers: [PelanggaranController],
  providers: [PelanggaranService, ValidationService],
})
export class PelanggaranModule {}
