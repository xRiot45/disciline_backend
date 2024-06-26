import { ErrorFilter } from './error/error.filter';
import { DatabaseModule } from './database/database.module';
import { ThrottlerGuard } from '@nestjs/throttler';
import { ValidationService } from './validation/validation.service';
import { APP_FILTER, APP_GUARD } from '@nestjs/core';
import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';

@Module({
  exports: [ValidationService],
  imports: [DatabaseModule],
  controllers: [],
  providers: [
    DatabaseModule,
    ValidationService,
    {
      provide: APP_FILTER,
      useClass: ErrorFilter,
    },
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class CommonModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply().forRoutes({
      path: '/api/*',
      method: RequestMethod.ALL,
    });
  }
}
