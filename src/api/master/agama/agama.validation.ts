import { ZodType, z } from 'zod';

export class AgamaValidation {
  static readonly CREATE: ZodType = z.object({
    nama_agama: z
      .string()
      .min(2, 'Nama Agama must have a minimum of 2 characters')
      .max(25, 'Nama Agama must have a maximum of 25 characters'),
  });

  static readonly UPDATE: ZodType = z.object({
    nama_agama: z
      .string()
      .min(2, 'Nama Agama must have a minimum of 2 characters')
      .max(25, 'Nama Agama must have a maximum of 25 characters'),
  });
}
