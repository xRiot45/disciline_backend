import { Kelas } from '../kelas/entities/kelas.entity';
import { Siswa } from './entities/siswa.entity';
import { Agama } from '../master/agama/entities/agama.entity';
import { WebResponse } from '../../common/dto/web.dto';
import { EntityManager } from 'typeorm';
import { SiswaValidation } from './siswa.validation';
import { ValidationService } from '../../common/validation/validation.service';
import { SiswaRequest, SiswaResponse } from './dto/siswa.dto';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class SiswaService {
  constructor(
    private readonly entityManager: EntityManager,
    private validationService: ValidationService,
  ) {}

  public async create(req: SiswaRequest): Promise<{ data: SiswaResponse }> {
    const createRequest = this.validationService.validate(
      SiswaValidation.CREATE,
      req,
    );

    // Check siswa in database
    const siswaExists = await this.entityManager.findOne(Siswa, {
      where: {
        nama_lengkap: createRequest.nama_lengkap,
      },
    });

    if (siswaExists) {
      throw new HttpException('Siswa already exists', HttpStatus.CONFLICT);
    }

    const [agama, kelas] = await Promise.all([
      this.entityManager.findOne(Agama, {
        where: {
          id: createRequest.agamaId,
        },
      }),

      this.entityManager.findOne(Kelas, {
        where: {
          id: createRequest.kelasId,
        },
      }),
    ]);

    if (!agama) {
      throw new HttpException('Agama not found', HttpStatus.NOT_FOUND);
    }

    if (!kelas) {
      throw new HttpException('Kelas not found', HttpStatus.NOT_FOUND);
    }

    const data = {
      ...createRequest,
      agamaId: agama,
      kelasId: kelas,
    };

    const siswa = new Siswa(data);
    await this.entityManager.save(siswa);

    return {
      data: {
        id: siswa.id,
        nama_lengkap: siswa.nama_lengkap,
        nis: siswa.nis,
        nisn: siswa.nisn,
        tanggal_lahir: siswa.tanggal_lahir,
        tempat_lahir: siswa.tempat_lahir,
        jenis_kelamin: siswa.jenis_kelamin,
        kelas: {
          id: kelas ? kelas.id : null,
          nama_kelas: kelas ? kelas.nama_kelas : null,
          jurusan: {
            id: kelas ? kelas.jurusanId.id : null,
            nama_jurusan: kelas ? kelas.jurusanId.nama_jurusan : null,
          },
          guru: {
            id: kelas ? kelas.guruId.id : null,
            nama_lengkap: kelas ? kelas.guruId.nama_lengkap : null,
          },
        },

        agama: {
          id: agama ? agama.id : null,
          nama_agama: agama ? agama.nama_agama : null,
        },

        nama_wali: siswa.nama_wali,
        no_telp_wali: siswa.no_telp_wali,
        alamat: siswa.alamat,
      },
    };
  }

  public async findAll(): Promise<{ data: SiswaResponse[] }> {
    const siswa = await this.entityManager.find(Siswa, {
      order: {
        createdAt: 'DESC',
      },
    });

    return {
      data: siswa.map((item) => ({
        id: item.id,
        nama_lengkap: item.nama_lengkap,
        nis: item.nis,
        nisn: item.nisn,
        tanggal_lahir: item.tanggal_lahir,
        tempat_lahir: item.tempat_lahir,
        jenis_kelamin: item.jenis_kelamin,
        kelas: {
          id: item.kelasId ? item.kelasId.id : null,
          nama_kelas: item.kelasId ? item.kelasId.nama_kelas : null,
          jurusan: {
            id: item.kelasId ? item.kelasId.jurusanId.id : null,
            nama_jurusan: item.kelasId
              ? item.kelasId.jurusanId.nama_jurusan
              : null,
          },
          guru: {
            id: item.kelasId ? item.kelasId.guruId.id : null,
            nama_lengkap: item.kelasId
              ? item.kelasId.guruId.nama_lengkap
              : null,
          },
        },

        agama: {
          id: item.agamaId ? item.agamaId.id : null,
          nama_agama: item.agamaId ? item.agamaId.nama_agama : null,
        },

        nama_wali: item.nama_wali,
        no_telp_wali: item.no_telp_wali,
        alamat: item.alamat,
      })),
    };
  }

  public async findById(siswaId: string): Promise<{ data: SiswaResponse }> {
    const siswa = await this.entityManager.findOne(Siswa, {
      where: {
        id: siswaId,
      },
    });

    if (!siswa) {
      throw new HttpException('Siswa not found', HttpStatus.NOT_FOUND);
    }

    return {
      data: {
        id: siswa.id,
        nama_lengkap: siswa.nama_lengkap,
        nis: siswa.nis,
        nisn: siswa.nisn,
        tanggal_lahir: siswa.tanggal_lahir,
        tempat_lahir: siswa.tempat_lahir,
        jenis_kelamin: siswa.jenis_kelamin,
        kelas: {
          id: siswa.kelasId ? siswa.kelasId.id : null,
          nama_kelas: siswa.kelasId ? siswa.kelasId.nama_kelas : null,
          jurusan: {
            id: siswa.kelasId ? siswa.kelasId.jurusanId.id : null,
            nama_jurusan: siswa.kelasId
              ? siswa.kelasId.jurusanId.nama_jurusan
              : null,
          },
          guru: {
            id: siswa.kelasId ? siswa.kelasId.guruId.id : null,
            nama_lengkap: siswa.kelasId
              ? siswa.kelasId.guruId.nama_lengkap
              : null,
          },
        },

        agama: {
          id: siswa.agamaId ? siswa.agamaId.id : null,
          nama_agama: siswa.agamaId ? siswa.agamaId.nama_agama : null,
        },

        nama_wali: siswa.nama_wali,
        no_telp_wali: siswa.no_telp_wali,
        alamat: siswa.alamat,
      },
    };
  }

  public async update(
    siswaId: string,
    req: SiswaRequest,
  ): Promise<{ data: SiswaResponse }> {
    const updateRequest = this.validationService.validate(
      SiswaValidation.UPDATE,
      req,
    );

    const siswa = await this.entityManager.findOne(Siswa, {
      where: {
        id: siswaId,
      },
    });

    if (!siswa) {
      throw new HttpException('Siswa not found', HttpStatus.NOT_FOUND);
    }

    const siswaWithSameName = await this.entityManager.findOne(Siswa, {
      where: {
        nama_lengkap: updateRequest.nama_lengkap,
      },
    });

    if (siswaWithSameName && siswaWithSameName.id !== siswaId) {
      throw new HttpException('Siswa already exists', HttpStatus.CONFLICT);
    }

    const [agama, kelas] = await Promise.all([
      this.entityManager.findOne(Agama, {
        where: {
          id: updateRequest.agamaId,
        },
      }),

      this.entityManager.findOne(Kelas, {
        where: {
          id: updateRequest.kelasId,
        },
      }),
    ]);

    if (!agama) {
      throw new HttpException('Agama not found', HttpStatus.NOT_FOUND);
    }

    if (!kelas) {
      throw new HttpException('Kelas not found', HttpStatus.NOT_FOUND);
    }

    const data = {
      ...updateRequest,
      agamaId: agama,
      kelasId: kelas,
    };

    await this.entityManager.update(Siswa, siswaId, data);
    const updatedSiswa = await this.entityManager.findOne(Siswa, {
      where: {
        id: siswaId,
      },
    });

    return {
      data: {
        id: updatedSiswa.id,
        nama_lengkap: updatedSiswa.nama_lengkap,
        nis: updatedSiswa.nis,
        nisn: updatedSiswa.nisn,
        tanggal_lahir: updatedSiswa.tanggal_lahir,
        tempat_lahir: updatedSiswa.tempat_lahir,
        jenis_kelamin: updatedSiswa.jenis_kelamin,
        kelas: {
          id: kelas ? kelas.id : null,
          nama_kelas: kelas ? kelas.nama_kelas : null,
          jurusan: {
            id: kelas ? kelas.jurusanId.id : null,
            nama_jurusan: kelas ? kelas.jurusanId.nama_jurusan : null,
          },
          guru: {
            id: kelas ? kelas.guruId.id : null,
            nama_lengkap: kelas ? kelas.guruId.nama_lengkap : null,
          },
        },

        agama: {
          id: agama ? agama.id : null,
          nama_agama: agama ? agama.nama_agama : null,
        },

        nama_wali: updatedSiswa.nama_wali,
        no_telp_wali: updatedSiswa.no_telp_wali,
        alamat: updatedSiswa.alamat,
      },
    };
  }

  public async delete(siswaId: string): Promise<WebResponse> {
    const siswa = await this.entityManager.findOne(Siswa, {
      where: {
        id: siswaId,
      },
    });

    if (!siswa) {
      throw new HttpException('Siswa not found', HttpStatus.NOT_FOUND);
    }

    await this.entityManager.delete(Siswa, siswaId);
    return {
      message: 'Siswa deleted successfully!',
    };
  }
}
