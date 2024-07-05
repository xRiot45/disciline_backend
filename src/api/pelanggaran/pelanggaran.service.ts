import { Siswa } from '../siswa/entities/siswa.entity';
import { Pelanggaran } from './entities/pelanggaran.entity';
import { EntityManager } from 'typeorm';
import { TipePelanggaran } from '../master/tipe-pelanggaran/entities/tipe-pelanggaran.entity';
import { ValidationService } from '../../common/validation/validation.service';
import { PelanggaranValidation } from './pelanggaran.validation';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PelanggaranRequest, PelanggaranResponse } from './dto/pelanggaran.dto';

@Injectable()
export class PelanggaranService {
  constructor(
    private readonly entityManager: EntityManager,
    private validationService: ValidationService,
  ) {}

  public async create(
    req: PelanggaranRequest,
  ): Promise<{ data: PelanggaranResponse }> {
    const createRequest = this.validationService.validate(
      PelanggaranValidation.CREATE,
      req,
    );

    const [tipePelanggaran, siswa] = await Promise.all([
      this.entityManager.findOne(TipePelanggaran, {
        where: {
          id: createRequest.tipePelanggaranId,
        },
      }),

      this.entityManager.findOne(Siswa, {
        where: {
          id: createRequest.siswaId,
        },
      }),
    ]);

    if (!tipePelanggaran) {
      throw new HttpException(
        'Tipe Pelanggaran not found',
        HttpStatus.NOT_FOUND,
      );
    }

    if (!siswa) {
      throw new HttpException('Siswa not found', HttpStatus.NOT_FOUND);
    }

    const data = {
      ...createRequest,
      tipePelanggaranId: tipePelanggaran,
      siswaId: siswa,
    };

    const pelanggaran = new Pelanggaran(data);
    await this.entityManager.save(pelanggaran);

    return {
      data: {
        id: pelanggaran.id,
        tipe_pelanggaran: {
          id: tipePelanggaran ? tipePelanggaran.id : null,
          nama_tipe_pelanggaran: tipePelanggaran
            ? tipePelanggaran.nama_tipe_pelanggaran
            : null,
        },
        siswa: {
          id: siswa ? siswa.id : null,
          nama_lengkap: siswa ? siswa.nama_lengkap : null,
          kelas: {
            id: siswa?.kelasId ? siswa.kelasId.id : null,
            nama_kelas: siswa?.kelasId ? siswa.kelasId.nama_kelas : null,
            jurusan: {
              nama_jurusan: siswa?.kelasId?.jurusanId
                ? siswa.kelasId.jurusanId.nama_jurusan
                : null,
            },
            guru: {
              nama_lengkap: siswa?.kelasId?.guruId
                ? siswa.kelasId.guruId.nama_lengkap
                : null,
            },
          },
          nama_wali: siswa ? siswa.nama_wali : null,
          no_telp_wali: siswa ? siswa.no_telp_wali : null,
          alamat: siswa ? siswa.alamat : null,
        },
        keterangan: pelanggaran.keterangan,
      },
    };
  }

  public async findAll(): Promise<{ data: PelanggaranResponse[] }> {
    const pelanggaran = await this.entityManager.find(Pelanggaran, {
      order: {
        createdAt: 'DESC',
      },
    });

    return {
      data: pelanggaran.map((item) => ({
        id: item.id,
        tipe_pelanggaran: {
          id: item.tipePelanggaranId ? item.tipePelanggaranId.id : null,
          nama_tipe_pelanggaran: item.tipePelanggaranId
            ? item.tipePelanggaranId.nama_tipe_pelanggaran
            : null,
        },
        siswa: {
          id: item.siswaId ? item.siswaId.id : null,
          nama_lengkap: item.siswaId ? item.siswaId.nama_lengkap : null,
          kelas: {
            id: item.siswaId?.kelasId ? item.siswaId.kelasId.id : null,
            nama_kelas: item.siswaId?.kelasId
              ? item.siswaId.kelasId.nama_kelas
              : null,
            jurusan: {
              nama_jurusan: item.siswaId?.kelasId?.jurusanId
                ? item.siswaId.kelasId.jurusanId.nama_jurusan
                : null,
            },
            guru: {
              nama_lengkap: item.siswaId?.kelasId?.guruId
                ? item.siswaId.kelasId.guruId.nama_lengkap
                : null,
            },
          },
          nama_wali: item.siswaId ? item.siswaId.nama_wali : null,
          no_telp_wali: item.siswaId ? item.siswaId.no_telp_wali : null,
          alamat: item.siswaId ? item.siswaId.alamat : null,
        },
        keterangan: item.keterangan,
      })),
    };
  }

  public async findById(
    pelanggaranId: string,
  ): Promise<{ data: PelanggaranResponse }> {
    const pelanggaran = await this.entityManager.findOne(Pelanggaran, {
      where: {
        id: pelanggaranId,
      },
    });

    if (!pelanggaran) {
      throw new HttpException('Pelanggaran not found', HttpStatus.NOT_FOUND);
    }

    return {
      data: {
        id: pelanggaran.id,
        tipe_pelanggaran: {
          id: pelanggaran.tipePelanggaranId
            ? pelanggaran.tipePelanggaranId.id
            : null,
          nama_tipe_pelanggaran: pelanggaran.tipePelanggaranId
            ? pelanggaran.tipePelanggaranId.nama_tipe_pelanggaran
            : null,
        },
        siswa: {
          id: pelanggaran.siswaId ? pelanggaran.siswaId.id : null,
          nama_lengkap: pelanggaran.siswaId
            ? pelanggaran.siswaId.nama_lengkap
            : null,
          kelas: {
            id: pelanggaran.siswaId?.kelasId
              ? pelanggaran.siswaId.kelasId.id
              : null,
            nama_kelas: pelanggaran.siswaId?.kelasId
              ? pelanggaran.siswaId.kelasId.nama_kelas
              : null,
            jurusan: {
              nama_jurusan: pelanggaran.siswaId?.kelasId?.jurusanId
                ? pelanggaran.siswaId.kelasId.jurusanId.nama_jurusan
                : null,
            },
            guru: {
              nama_lengkap: pelanggaran.siswaId?.kelasId?.guruId
                ? pelanggaran.siswaId.kelasId.guruId.nama_lengkap
                : null,
            },
          },
          nama_wali: pelanggaran.siswaId ? pelanggaran.siswaId.nama_wali : null,
          no_telp_wali: pelanggaran.siswaId
            ? pelanggaran.siswaId.no_telp_wali
            : null,
          alamat: pelanggaran.siswaId ? pelanggaran.siswaId.alamat : null,
        },
        keterangan: pelanggaran.keterangan,
      },
    };
  }

  public async update(
    pelanggaranId: string,
    req: PelanggaranRequest,
  ): Promise<{ data: PelanggaranResponse }> {
    const updateRequest = this.validationService.validate(
      PelanggaranValidation.UPDATE,
      req,
    );

    const pelanggaran = await this.entityManager.findOne(Pelanggaran, {
      where: {
        id: pelanggaranId,
      },
    });

    if (!pelanggaran) {
      throw new HttpException('Pelanggaran not found', HttpStatus.NOT_FOUND);
    }

    const [tipePelanggaran, siswa] = await Promise.all([
      this.entityManager.findOne(TipePelanggaran, {
        where: {
          id: updateRequest.tipePelanggaranId,
        },
      }),

      this.entityManager.findOne(Siswa, {
        where: {
          id: updateRequest.siswaId,
        },
      }),
    ]);

    if (!tipePelanggaran) {
      throw new HttpException(
        'Tipe Pelanggaran not found',
        HttpStatus.NOT_FOUND,
      );
    }

    if (!siswa) {
      throw new HttpException('Siswa not found', HttpStatus.NOT_FOUND);
    }

    const data = {
      ...updateRequest,
      tipePelanggaranId: tipePelanggaran,
      siswaId: siswa,
    };

    await this.entityManager.update(Pelanggaran, pelanggaranId, data);
    const updatedPelanggaran = await this.entityManager.findOne(Pelanggaran, {
      where: {
        id: pelanggaranId,
      },
    });

    return {
      data: {
        id: updatedPelanggaran.id,
        tipe_pelanggaran: {
          id: tipePelanggaran ? tipePelanggaran.id : null,
          nama_tipe_pelanggaran: tipePelanggaran
            ? tipePelanggaran.nama_tipe_pelanggaran
            : null,
        },
        siswa: {
          id: siswa ? siswa.id : null,
          nama_lengkap: siswa ? siswa.nama_lengkap : null,
          kelas: {
            id: siswa?.kelasId ? siswa.kelasId.id : null,
            nama_kelas: siswa?.kelasId ? siswa.kelasId.nama_kelas : null,
            jurusan: {
              nama_jurusan: siswa?.kelasId?.jurusanId
                ? siswa.kelasId.jurusanId.nama_jurusan
                : null,
            },
            guru: {
              nama_lengkap: siswa?.kelasId?.guruId
                ? siswa.kelasId.guruId.nama_lengkap
                : null,
            },
          },
          nama_wali: siswa ? siswa.nama_wali : null,
          no_telp_wali: siswa ? siswa.no_telp_wali : null,
          alamat: siswa ? siswa.alamat : null,
        },
        keterangan: updatedPelanggaran.keterangan,
      },
    };
  }
}
