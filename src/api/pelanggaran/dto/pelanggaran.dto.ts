import { ApiProperty } from '@nestjs/swagger';

export class PelanggaranRequest {
  @ApiProperty({
    type: String,
    description: 'Tipe Pelanggaran ID',
  })
  tipePelanggaranId: string;

  @ApiProperty({
    type: String,
    description: 'Siswa ID',
  })
  siswaId: string;

  @ApiProperty({
    type: String,
    description: 'Keterangan',
  })
  keterangan: string;
}

export class PelanggaranResponse {
  id: string;
  tipe_pelanggaran: {
    id: string;
    nama_tipe_pelanggaran: string;
  };
  siswa: {
    id: string;
    nama_lengkap: string;
    kelas: {
      id: string;
      nama_kelas: string;
      jurusan: {
        nama_jurusan: string;
      };
      guru: {
        nama_lengkap: string;
      };
    };
    nama_wali: string;
    no_telp_wali: string;
    alamat: string;
  };
  keterangan: string;
}
