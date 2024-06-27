import { Module } from '@nestjs/common';
import { Jabatan } from './entities/jabatan.entity';
import { UsersModule } from 'src/api/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JabatanService } from './jabatan.service';
import { JabatanController } from './jabatan.controller';
import { ValidationService } from 'src/common/validation/validation.service';

@Module({
  imports: [TypeOrmModule.forFeature([Jabatan]), UsersModule],
  controllers: [JabatanController],
  providers: [JabatanService, ValidationService],
})
export class JabatanModule {}
