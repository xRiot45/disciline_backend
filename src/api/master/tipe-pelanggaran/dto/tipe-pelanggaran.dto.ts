import { ApiProperty } from '@nestjs/swagger';

export class TipePelanggaranRequest {
  @ApiProperty({
    type: String,
    description: 'Nama Tipe Pelanggaran',
  })
  nama_tipe_pelanggaran: string;
}

export class TipePelanggaranResponse {
  id: string;
  nama_tipe_pelanggaran: string;
}
