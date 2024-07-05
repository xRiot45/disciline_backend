import { Module } from '@nestjs/common';
import { Pendidikan } from './entities/pendidikan.entity';
import { UsersModule } from '../../../api/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PendidikanService } from './pendidikan.service';
import { ValidationService } from '../../../common/validation/validation.service';
import { PendidikanController } from './pendidikan.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Pendidikan]), UsersModule],
  controllers: [PendidikanController],
  providers: [PendidikanService, ValidationService],
})
export class PendidikanModule {}
