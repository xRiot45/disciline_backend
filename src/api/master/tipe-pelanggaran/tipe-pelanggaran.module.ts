import { Module } from '@nestjs/common';
import { UsersModule } from '../../../api/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipePelanggaran } from './entities/tipe-pelanggaran.entity';
import { ValidationService } from '../../../common/validation/validation.service';
import { TipePelanggaranService } from './tipe-pelanggaran.service';
import { TipePelanggaranController } from './tipe-pelanggaran.controller';

@Module({
  imports: [TypeOrmModule.forFeature([TipePelanggaran]), UsersModule],
  controllers: [TipePelanggaranController],
  providers: [TipePelanggaranService, ValidationService],
})
export class TipePelanggaranModule {}
