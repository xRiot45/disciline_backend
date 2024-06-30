export class SiswaRequest {
  nama_lengkap: string;
  nis: string;
  nisn: string;
  tanggal_lahir: string;
  tempat_lahir: string;
  jenis_kelamin: string;
  agamaId: string;
  kelasId: string;
  nama_wali: string;
  no_telp_wali: string;
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
    nama_agama: string;
  };
  kelas: {
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
}
