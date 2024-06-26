import { ZodType } from 'zod';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ValidationService {
  validate<T>(zodType: ZodType<T>, data: T): T {
    return zodType.parse(data);
  }
}
