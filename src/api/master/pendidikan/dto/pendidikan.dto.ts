import { ApiProperty } from '@nestjs/swagger';

export class PendidikanRequest {
  @ApiProperty({
    type: String,
    description: 'Nama Pendidikan',
  })
  nama_pendidikan: string;
}

export class PendidikanResponse {
  id: string;
  nama_pendidikan: string;
}
