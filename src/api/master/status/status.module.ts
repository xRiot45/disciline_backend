import { Status } from './entities/status.entity';
import { Module } from '@nestjs/common';
import { UsersModule } from '../../../api/users/users.module';
import { StatusService } from './status.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StatusController } from './status.controller';
import { ValidationService } from '../../../common/validation/validation.service';

@Module({
  imports: [TypeOrmModule.forFeature([Status]), UsersModule],
  controllers: [StatusController],
  providers: [StatusService, ValidationService],
})
export class StatusModule {}
