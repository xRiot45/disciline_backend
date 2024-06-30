export class PelanggaranRequest {
  tipePelanggaranId: string;
  siswaId: string;
  keterangan: string;
}

export class PelanggaranResponse {
  id: string;
  tipe_pelanggaran: {
    nama_tipe_pelanggaran: string;
  };
  siswa: {
    nama_lengkap: string;
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
  };
  keterangan: string;
}