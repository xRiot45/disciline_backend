import { ApiProperty } from '@nestjs/swagger';

export class GuruRequest {
  @ApiProperty({
    type: String,
    description: 'Nama Lengkap',
  })
  nama_lengkap: string;

  @ApiProperty({
    type: String,
    description: 'NIP',
  })
  nip: string;

  @ApiProperty({
    type: String,
    description: 'Status ID',
  })
  statusId: string;

  @ApiProperty({
    type: String,
    description: 'Jabatan ID',
  })
  jabatanId: string;

  @ApiProperty({
    type: String,
    description: 'Golongan ID',
  })
  golonganId: string;

  @ApiProperty({
    type: String,
    description: 'Agama ID',
  })
  agamaId: string;

  @ApiProperty({
    type: String,
    description: 'Jenis Kelamin',
  })
  jenis_kelamin: string;

  @ApiProperty({
    type: String,
    description: 'Nomor Telepon',
  })
  no_telp: string;

  @ApiProperty({
    type: String,
    description: 'Alamat',
  })
  alamat: string;
}

export class GuruResponse {
  id: string;
  nama_lengkap: string;
  nip: string;
  status: {
    id: string;
    nama_status: string;
  };
  jabatan: {
    id: string;
    nama_jabatan: string;
  };
  golongan: {
    id: string;
    nama_golongan: string;
  };
  agama: {
    id: string;
    nama_agama: string;
  };
  jenis_kelamin: string;
  no_telp: string;
  alamat: string;
}
