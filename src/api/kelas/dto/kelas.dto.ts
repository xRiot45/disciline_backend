import { ApiProperty } from '@nestjs/swagger';

export class KelasRequest {
  @ApiProperty({
    type: String,
    description: 'Nama Kelas',
  })
  nama_kelas: string;

  @ApiProperty({
    type: String,
    description: 'Jurusan ID',
  })
  jurusanId: string;

  @ApiProperty({
    type: String,
    description: 'Guru ID',
  })
  guruId: string;
}

export class KelasResponse {
  id: string;
  nama_kelas: string;
  jurusan: {
    id: string;
    nama_jurusan: string;
  };
  guru: {
    id: string;
    nama_guru: string;
    no_telp: string;
  };
}
