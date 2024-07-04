import { ApiProperty } from '@nestjs/swagger';

export class JabatanRequest {
  @ApiProperty({
    type: String,
    description: 'Nama Jabatan',
  })
  nama_jabatan: string;
}

export class JabatanResponse {
  id: string;
  nama_jabatan: string;
}
