import { ZodType, z } from 'zod';

export class GuruValidation {
  static readonly CREATE: ZodType = z.object({
    nama_lengkap: z
      .string()
      .min(1, 'Nama Lengkap must have a minimum of 1 characters')
      .max(50, 'Nama Lengkap must have a maximum of 50 characters'),

    nip: z
      .string()
      .min(1, 'NIP must have a minimum of 1 characters')
      .max(50, 'NIP must have a maximum of 50 characters'),

    statusId: z.string().uuid('Status ID must be a valid UUID'),
    jabatanId: z.string().uuid('Jabatan ID must be a valid UUID'),
    golonganId: z.string().uuid('Golongan ID must be a valid UUID'),
    agamaId: z.string().uuid('Agama ID must be a valid UUID'),

    jenis_kelamin: z
      .string()
      .min(1, 'Jenis Kelamin must have a minimum of 1 characters')
      .max(20, 'Jenis Kelamin must have a maximum of 20 characters'),

    no_telp: z
      .string()
      .min(1, 'No Telp must have a minimum of 1 characters')
      .max(20, 'No Telp must have a maximum of 20 characters'),

    alamat: z.string().min(1, 'Alamat must have a minimum of 1 characters'),
  });

  static readonly UPDATE: ZodType = z.object({
    nama_lengkap: z
      .string()
      .min(1, 'Nama Lengkap must have a minimum of 1 characters')
      .max(50, 'Nama Lengkap must have a maximum of 50 characters'),

    nip: z
      .string()
      .min(1, 'NIP must have a minimum of 1 characters')
      .max(50, 'NIP must have a maximum of 50 characters'),

    statusId: z.string().uuid('Status ID must be a valid UUID'),
    jabatanId: z.string().uuid('Jabatan ID must be a valid UUID'),
    golonganId: z.string().uuid('Golongan ID must be a valid UUID'),
    agamaId: z.string().uuid('Agama ID must be a valid UUID'),

    jenis_kelamin: z
      .string()
      .min(1, 'Jenis Kelamin must have a minimum of 1 characters')
      .max(20, 'Jenis Kelamin must have a maximum of 20 characters'),

    no_telp: z
      .string()
      .min(1, 'No Telp must have a minimum of 1 characters')
      .max(20, 'No Telp must have a maximum of 20 characters'),

    alamat: z.string().min(1, 'Alamat must have a minimum of 1 characters'),
  });
}
