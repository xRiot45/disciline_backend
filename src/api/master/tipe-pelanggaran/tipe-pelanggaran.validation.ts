import { ZodType, z } from 'zod';

export class TipePelanggaranValidation {
  static readonly CREATE: ZodType = z.object({
    nama_tipe_pelanggaran: z
      .string()
      .min(2, 'Nama Tipe Pelanggaran must have a minimum of 2 characters')
      .max(50, 'Nama Tipe Pelanggaran must have a maximum of 50 characters'),
  });

  static readonly UPDATE: ZodType = z.object({
    nama_tipe_pelanggaran: z
      .string()
      .min(2, 'Nama Tipe Pelanggaran must have a minimum of 2 characters')
      .max(50, 'Nama Tipe Pelanggaran must have a maximum of 50 characters'),
  });
}
