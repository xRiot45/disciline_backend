import { ApiProperty } from '@nestjs/swagger';

export class GolonganRequest {
  @ApiProperty({
    type: String,
    description: 'Nama Golongan',
  })
  nama_golongan: string;
}

export class GolonganResponse {
  id: string;
  nama_golongan: string;
}
