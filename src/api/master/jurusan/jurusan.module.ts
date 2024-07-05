import { Module } from '@nestjs/common';
import { Jurusan } from './entities/jurusan.entity';
import { UsersModule } from '../../../api/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JurusanService } from './jurusan.service';
import { JurusanController } from './jurusan.controller';
import { ValidationService } from '../../../common/validation/validation.service';

@Module({
  imports: [TypeOrmModule.forFeature([Jurusan]), UsersModule],
  controllers: [JurusanController],
  providers: [JurusanService, ValidationService],
})
export class JurusanModule {}
