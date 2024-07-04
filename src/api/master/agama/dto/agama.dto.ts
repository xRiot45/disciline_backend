import { ApiProperty } from '@nestjs/swagger';

export class AgamaRequest {
  @ApiProperty({
    type: String,
    description: 'Nama Agama',
  })
  nama_agama: string;
}

export class AgamaResponse {
  id: string;
  nama_agama: string;
}
