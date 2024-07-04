import { ApiProperty } from '@nestjs/swagger';

export class SiswaRequest {
  @ApiProperty({
    type: String,
    description: 'Nama Lengkap',
  })
  nama_lengkap: string;

  @ApiProperty({
    type: String,
    description: 'NIS',
  })
  nis: string;

  @ApiProperty({
    type: String,
    description: 'NISN',
  })
  nisn: string;

  @ApiProperty({
    type: String,
    description: 'Tanggal Lahir',
  })
  tanggal_lahir: string;

  @ApiProperty({
    type: String,
    description: 'Tempat Lahir',
  })
  tempat_lahir: string;

  @ApiProperty({
    type: String,
    description: 'Jenis Kelamin',
  })
  jenis_kelamin: string;

  @ApiProperty({
    type: String,
    description: 'Agama ID',
  })
  agamaId: string;

  @ApiProperty({
    type: String,
    description: 'Kelas ID',
  })
  kelasId: string;

  @ApiProperty({
    type: String,
    description: 'Nama Wali',
  })
  nama_wali: string;

  @ApiProperty({
    type: String,
    description: 'No Telp Wali',
  })
  no_telp_wali: string;

  @ApiProperty({
    type: String,
    description: 'Alamat',
  })
  alamat: string;
}

export class SiswaResponse {
  id: string;
  nama_lengkap: string;
  nis: string;
  nisn: string;
  tanggal_lahir: string;
  tempat_lahir: string;
  jenis_kelamin: string;
  agama: {
    id: string;
    nama_agama: string;
  };
  kelas: {
    id: string;
    nama_kelas: string;
    jurusan: {
      id: string;
      nama_jurusan: string;
    };
    guru: {
      id: string;
      nama_lengkap: string;
    };
  };
  nama_wali: string;
  no_telp_wali: string;
  alamat: string;
}
