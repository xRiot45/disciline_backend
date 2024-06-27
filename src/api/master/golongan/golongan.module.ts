import { Module } from '@nestjs/common';
import { Golongan } from './entities/golongan.entity';
import { UsersModule } from 'src/api/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GolonganService } from './golongan.service';
import { ValidationService } from 'src/common/validation/validation.service';
import { GolonganController } from './golongan.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Golongan]), UsersModule],
  controllers: [GolonganController],
  providers: [GolonganService, ValidationService],
})
export class GolonganModule {}
