import { ZodType, z } from 'zod';

export class SiswaValidation {
  static readonly CREATE: ZodType = z.object({
    nama_lengkap: z
      .string()
      .min(2, 'Nama Lengkap must have a minimum of 2 characters')
      .max(50, 'Nama Lengkap must have a maximum of 50 characters'),

    nis: z
      .string()
      .min(2, 'NIS must have a minimum of 2 characters')
      .max(20, 'NIS must have a maximum of 20 characters'),

    nisn: z
      .string()
      .min(2, 'NISN must have a minimum of 2 characters')
      .max(20, 'NISN must have a maximum of 20 characters'),

    tanggal_lahir: z
      .string()
      .min(2, 'Tanggal Lahir must have a minimum of 2 characters')
      .max(50, 'Tanggal Lahir must have a maximum of 50 characters'),

    tempat_lahir: z
      .string()
      .min(2, 'Tempat Lahir must have a minimum of 2 characters')
      .max(100, 'Tempat Lahir must have a maximum of 100 characters'),

    jenis_kelamin: z
      .string()
      .min(2, 'Jenis Kelamin must have a minimum of 2 characters')
      .max(20, 'Jenis Kelamin must have a maximum of 20 characters'),

    agamaId: z.string().uuid('Agama ID must be a valid UUID'),
    kelasId: z.string().uuid('Kelas ID must be a valid UUID'),

    nama_wali: z
      .string()
      .min(2, 'Nama Wali must have a minimum of 2 characters')
      .max(50, 'Nama Wali must have a maximum of 20 characters'),

    no_telp_wali: z
      .string()
      .min(2, 'No Telp Wali must have a minimum of 2 characters')
      .max(20, 'No Telp Wali must have a maximum of 20 characters'),

    alamat: z.string().min(1, 'Alamat must have a minimum of 1 characters'),
  });

  static readonly UPDATE: ZodType = z.object({
    nama_lengkap: z
      .string()
      .min(2, 'Nama Lengkap must have a minimum of 2 characters')
      .max(50, 'Nama Lengkap must have a maximum of 50 characters'),

    nis: z
      .string()
      .min(2, 'NIS must have a minimum of 2 characters')
      .max(20, 'NIS must have a maximum of 20 characters'),

    nisn: z
      .string()
      .min(2, 'NISN must have a minimum of 2 characters')
      .max(20, 'NISN must have a maximum of 20 characters'),

    tanggal_lahir: z
      .string()
      .min(2, 'Tanggal Lahir must have a minimum of 2 characters')
      .max(50, 'Tanggal Lahir must have a maximum of 50 characters'),

    tempat_lahir: z
      .string()
      .min(2, 'Tempat Lahir must have a minimum of 2 characters')
      .max(100, 'Tempat Lahir must have a maximum of 100 characters'),

    jenis_kelamin: z
      .string()
      .min(2, 'Jenis Kelamin must have a minimum of 2 characters')
      .max(20, 'Jenis Kelamin must have a maximum of 20 characters'),

    agamaId: z.string().uuid('Agama ID must be a valid UUID'),
    kelasId: z.string().uuid('Kelas ID must be a valid UUID'),

    nama_wali: z
      .string()
      .min(2, 'Nama Wali must have a minimum of 2 characters')
      .max(50, 'Nama Wali must have a maximum of 20 characters'),

    no_telp_wali: z
      .string()
      .min(2, 'No Telp Wali must have a minimum of 2 characters')
      .max(20, 'No Telp Wali must have a maximum of 20 characters'),

    alamat: z.string().min(1, 'Alamat must have a minimum of 1 characters'),
  });
}
