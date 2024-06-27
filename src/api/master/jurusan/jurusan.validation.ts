import { ZodType, z } from 'zod';

export class JurusanValidation {
  static readonly CREATE: ZodType = z.object({
    nama_jurusan: z
      .string()
      .min(2, 'Nama Jurusan must have a minimum of 2 characters')
      .max(25, 'Nama Jurusan must have a maximum of 25 characters'),
  });

  static readonly UPDATE: ZodType = z.object({
    nama_jurusan: z
      .string()
      .min(2, 'Nama Jurusan must have a minimum of 2 characters')
      .max(25, 'Nama Jurusan must have a maximum of 25 characters'),
  });
}
