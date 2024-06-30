import { ZodType, z } from 'zod';

export class PelanggaranValidation {
  static readonly CREATE: ZodType = z.object({
    tipePelanggaranId: z
      .string()
      .uuid('Tipe Pelanggaran ID must be a valid UUID'),
    siswaId: z.string().uuid('Siswa ID must be a valid UUID'),
    keterangan: z
      .string()
      .min(1, 'Keterangan must have a minimum of 1 characters'),
  });

  static readonly UPDATE: ZodType = z.object({
    tipePelanggaranId: z
      .string()
      .uuid('Tipe Pelanggaran ID must be a valid UUID'),
    siswaId: z.string().uuid('Siswa ID must be a valid UUID'),
    keterangan: z
      .string()
      .min(1, 'Keterangan must have a minimum of 1 characters'),
  });
}
