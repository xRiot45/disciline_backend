export class GuruRequest {
  nama_lengkap: string;
  nip: string;
  statusId: string;
  jabatanId: string;
  golonganId: string;
  agamaId: string;
  jenis_kelamin: string;
  no_telp: string;
  alamat: string;
}

export class GuruResponse {
  id: string;
  nama_lengkap: string;
  nip: string;
  status: {
    id: string;
    nama_status: string;
  };
  jabatan: {
    id: string;
    nama_jabatan: string;
  };
  golongan: {
    id: string;
    nama_golongan: string;
  };
  agama: {
    id: string;
    nama_agama: string;
  };
  jenis_kelamin: string;
  no_telp: string;
  alamat: string;
}
