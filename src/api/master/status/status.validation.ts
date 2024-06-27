import { ZodType, z } from 'zod';

export class StatusValidation {
  static readonly CREATE: ZodType = z.object({
    nama_status: z
      .string()
      .min(2, 'Nama Status must have a minimum of 2 characters')
      .max(25, 'Nama Status must have a maximum of 25 characters'),
  });

  static readonly UPDATE: ZodType = z.object({
    nama_status: z
      .string()
      .min(2, 'Nama Status must have a minimum of 2 characters')
      .max(25, 'Nama Status must have a maximum of 25 characters'),
  });
}
