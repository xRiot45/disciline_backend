import { ApiProperty } from '@nestjs/swagger';

export class StatusRequest {
  @ApiProperty({
    type: String,
    description: 'Nama Status',
  })
  nama_status: string;
}

export class StatusResponse {
  id: string;
  nama_status: string;
}
