import { Kelas } from './entities/kelas.entity';
import { Module } from '@nestjs/common';
import { UsersModule } from '../users/users.module';
import { KelasService } from './kelas.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KelasController } from './kelas.controller';
import { ValidationService } from '../../common/validation/validation.service';

@Module({
  imports: [TypeOrmModule.forFeature([Kelas]), UsersModule],
  controllers: [KelasController],
  providers: [KelasService, ValidationService],
})
export class KelasModule {}
