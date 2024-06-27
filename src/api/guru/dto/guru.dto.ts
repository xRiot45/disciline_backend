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
  status: { nama_status: string };
  jabatan: { nama_jabatan: string };
  golongan: { nama_golongan: string };
  agama: { nama_agama: string };
  jenis_kelamin: string;
  no_telp: string;
  alamat: string;
}
