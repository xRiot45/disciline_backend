import { ZodType, z } from 'zod';

export class JabatanValidation {
  static readonly CREATE: ZodType = z.object({
    nama_jabatan: z
      .string()
      .min(2, 'Nama Jabatan must have a minimum of 2 characters')
      .max(25, 'Nama Jabatan must have a maximum of 25 characters'),
  });

  static readonly UPDATE: ZodType = z.object({
    nama_jabatan: z
      .string()
      .min(2, 'Nama Jabatan must have a minimum of 2 characters')
      .max(25, 'Nama Jabatan must have a maximum of 25 characters'),
  });
}
