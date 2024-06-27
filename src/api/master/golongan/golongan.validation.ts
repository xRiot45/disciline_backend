import { ZodType, z } from 'zod';

export class GolonganValidation {
  static readonly CREATE: ZodType = z.object({
    nama_golongan: z
      .string()
      .min(2, 'Nama Golongan must have a minimum of 2 characters')
      .max(25, 'Nama Golongan must have a maximum of 25 characters'),
  });

  static readonly UPDATE: ZodType = z.object({
    nama_golongan: z
      .string()
      .min(2, 'Nama Golongan must have a minimum of 2 characters')
      .max(25, 'Nama Golongan must have a maximum of 25 characters'),
  });
}
