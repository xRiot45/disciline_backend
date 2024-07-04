import { ApiProperty } from '@nestjs/swagger';

export class JurusanRequest {
  @ApiProperty({
    type: String,
    description: 'Nama Jurusan',
  })
  nama_jurusan: string;
}

export class JurusanResponse {
  id: string;
  nama_jurusan: string;
}
