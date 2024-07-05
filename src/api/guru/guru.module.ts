import { Guru } from './entities/guru.entity';
import { Module } from '@nestjs/common';
import { GuruService } from './guru.service';
import { UsersModule } from '../users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GuruController } from './guru.controller';
import { ValidationService } from '../../common/validation/validation.service';

@Module({
  imports: [TypeOrmModule.forFeature([Guru]), UsersModule],
  controllers: [GuruController],
  providers: [GuruService, ValidationService],
})
export class GuruModule {}
