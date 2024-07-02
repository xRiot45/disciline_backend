export class KelasRequest {
  nama_kelas: string;
  jurusanId: string;
  guruId: string;
}

export class KelasResponse {
  id: string;
  nama_kelas: string;
  jurusan: {
    id: string;
    nama_jurusan: string;
  };
  guru: {
    id: string;
    nama_guru: string;
    no_telp: string;
  };
}
