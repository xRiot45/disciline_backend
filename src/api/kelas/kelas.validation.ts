import { ZodType, z } from 'zod';

export class KelasValidation {
  static readonly CREATE: ZodType = z.object({
    nama_kelas: z
      .string()
      .min(2, 'Nama Kelas must have a minimum of 2 characters')
      .max(25, 'Nama Kelas must have a maximum of 25 characters'),

    jurusanId: z.string().uuid('Jurusan Id must be a valid UUID'),
    guruId: z.string().uuid('Guru Id must be a valid UUID'),
  });

  static readonly UPDATE: ZodType = z.object({
    nama_kelas: z
      .string()
      .min(2, 'Nama Kelas must have a minimum of 2 characters')
      .max(25, 'Nama Kelas must have a maximum of 25 characters'),

    jurusanId: z.string().uuid('Jurusan Id must be a valid UUID'),
    guruId: z.string().uuid('Guru Id must be a valid UUID'),
  });
}
