import { ZodType, z } from 'zod';

export class PendidikanValidation {
  static readonly CREATE: ZodType = z.object({
    nama_pendidikan: z
      .string()
      .min(2, 'Nama Pendidikan must have a minimum of 2 characters')
      .max(25, 'Nama Pendidikan must have a maximum of 25 characters'),
  });

  static readonly UPDATE: ZodType = z.object({
    nama_pendidikan: z
      .string()
      .min(2, 'Nama Pendidikan must have a minimum of 2 characters')
      .max(25, 'Nama Pendidikan must have a maximum of 25 characters'),
  });
}
