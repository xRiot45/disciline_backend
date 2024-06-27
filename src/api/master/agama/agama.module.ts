import { Agama } from './entities/agama.entity';
import { Module } from '@nestjs/common';
import { UsersModule } from '../../users/users.module';
import { AgamaService } from './agama.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AgamaController } from './agama.controller';
import { ValidationService } from '../../../common/validation/validation.service';

@Module({
  imports: [TypeOrmModule.forFeature([Agama]), UsersModule],
  controllers: [AgamaController],
  providers: [AgamaService, ValidationService],
})
export class AgamaModule {}
