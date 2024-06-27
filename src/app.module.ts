import { ApiModule } from './api/api.module';
import { CommonModule } from './common/common.module';
import { ConfigModule } from '@nestjs/config';
import { Global, Module } from '@nestjs/common';
import { ThrottlerModule } from '@nestjs/throttler';
import { TipePelanggaranModule } from './api/master/tipe-pelanggaran/tipe-pelanggaran.module';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ThrottlerModule.forRoot([
      {
        ttl: 60000,
        limit: 100,
      },
    ]),
    CommonModule,
    ApiModule,
    TipePelanggaranModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
