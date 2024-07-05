import { Guru } from './entities/guru.entity';
import { Agama } from '../master/agama/entities/agama.entity';
import { Status } from '../master/status/entities/status.entity';
import { Jabatan } from '../master/jabatan/entities/jabatan.entity';
import { Golongan } from '../master/golongan/entities/golongan.entity';
import { WebResponse } from '../../common/dto/web.dto';
import { EntityManager } from 'typeorm';
import { GuruValidation } from './guru.validation';
import { ValidationService } from '../../common/validation/validation.service';
import { GuruRequest, GuruResponse } from './dto/guru.dto';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class GuruService {
  constructor(
    private readonly entityManager: EntityManager,
    private validationService: ValidationService,
  ) {}

  public async create(req: GuruRequest): Promise<{ data: GuruResponse }> {
    const createRequest = this.validationService.validate(
      GuruValidation.CREATE,
      req,
    );

    // Check nama lengkap guru and nip exist in database
    const guruExists = await this.entityManager.findOne(Guru, {
      where: {
        nama_lengkap: createRequest.nama_lengkap,
        nip: createRequest.nip,
      },
    });

    if (guruExists) {
      throw new HttpException('Guru already exists', HttpStatus.CONFLICT);
    }

    const [status, jabatan, golongan, agama] = await Promise.all([
      this.entityManager.findOne(Status, {
        where: {
          id: createRequest.statusId,
        },
      }),

      this.entityManager.findOne(Jabatan, {
        where: {
          id: createRequest.jabatanId,
        },
      }),

      this.entityManager.findOne(Golongan, {
        where: {
          id: createRequest.golonganId,
        },
      }),

      this.entityManager.findOne(Agama, {
        where: {
          id: createRequest.agamaId,
        },
      }),
    ]);

    const data = {
      ...createRequest,
      statusId: status,
      jabatanId: jabatan,
      golonganId: golongan,
      agamaId: agama,
    };

    const guru = new Guru(data);
    const savedGuru = await this.entityManager.save(guru);

    return {
      data: {
        id: savedGuru.id,
        nama_lengkap: savedGuru.nama_lengkap,
        nip: savedGuru.nip,
        status: {
          id: status ? status.id : null,
          nama_status: status ? status.nama_status : null,
        },
        jabatan: {
          id: jabatan ? jabatan.id : null,
          nama_jabatan: jabatan ? jabatan.nama_jabatan : null,
        },
        golongan: {
          id: golongan ? golongan.id : null,
          nama_golongan: golongan ? golongan.nama_golongan : null,
        },
        agama: {
          id: agama ? agama.id : null,
          nama_agama: agama ? agama.nama_agama : null,
        },
        jenis_kelamin: savedGuru.jenis_kelamin,
        no_telp: savedGuru.no_telp,
        alamat: savedGuru.alamat,
      },
    };
  }

  public async findAll(): Promise<{ data: GuruResponse[] }> {
    const guru = await this.entityManager.find(Guru, {
      order: {
        createdAt: 'DESC',
      },
    });

    const data: GuruResponse[] = guru.map((item) => {
      return {
        id: item.id,
        nama_lengkap: item.nama_lengkap,
        nip: item.nip,
        status: {
          id: item.statusId ? item.statusId.id : null,
          nama_status: item.statusId ? item.statusId.nama_status : null,
        },
        jabatan: {
          id: item.jabatanId ? item.jabatanId.id : null,
          nama_jabatan: item.jabatanId ? item.jabatanId.nama_jabatan : null,
        },
        golongan: {
          id: item.golonganId ? item.golonganId.id : null,
          nama_golongan: item.golonganId ? item.golonganId.nama_golongan : null,
        },
        agama: {
          id: item.agamaId ? item.agamaId.id : null,
          nama_agama: item.agamaId ? item.agamaId.nama_agama : null,
        },
        jenis_kelamin: item.jenis_kelamin,
        no_telp: item.no_telp,
        alamat: item.alamat,
      };
    });

    return { data: data };
  }

  public async findById(guruId: string): Promise<{ data: GuruResponse }> {
    const guru = await this.entityManager.findOne(Guru, {
      where: {
        id: guruId,
      },
    });

    if (!guru) {
      throw new HttpException('Guru not found', HttpStatus.NOT_FOUND);
    }

    return {
      data: {
        id: guru.id,
        nama_lengkap: guru.nama_lengkap,
        nip: guru.nip,
        status: {
          id: guru.statusId ? guru.statusId.id : null,
          nama_status: guru.statusId ? guru.statusId.nama_status : null,
        },
        jabatan: {
          id: guru.jabatanId ? guru.jabatanId.id : null,
          nama_jabatan: guru.jabatanId ? guru.jabatanId.nama_jabatan : null,
        },
        golongan: {
          id: guru.golonganId ? guru.golonganId.id : null,
          nama_golongan: guru.golonganId ? guru.golonganId.nama_golongan : null,
        },
        agama: {
          id: guru.agamaId ? guru.agamaId.id : null,
          nama_agama: guru.agamaId ? guru.agamaId.nama_agama : null,
        },
        jenis_kelamin: guru.jenis_kelamin,
        no_telp: guru.no_telp,
        alamat: guru.alamat,
      },
    };
  }

  public async update(
    guruId: string,
    req: GuruRequest,
  ): Promise<{ data: GuruResponse }> {
    const updateRequest = this.validationService.validate(
      GuruValidation.UPDATE,
      req,
    );

    const guru = await this.entityManager.findOne(Guru, {
      where: {
        id: guruId,
      },
    });

    if (!guru) {
      throw new HttpException('Guru not found', HttpStatus.NOT_FOUND);
    }

    const guruWithSameNipAndName = await this.entityManager.findOne(Guru, {
      where: {
        nama_lengkap: updateRequest.nama_lengkap,
        nip: updateRequest.nip,
      },
    });

    if (guruWithSameNipAndName && guruWithSameNipAndName.id !== guruId) {
      throw new HttpException('Guru already exists', HttpStatus.CONFLICT);
    }

    const [status, jabatan, golongan, agama] = await Promise.all([
      this.entityManager.findOne(Status, {
        where: {
          id: updateRequest.statusId,
        },
      }),

      this.entityManager.findOne(Jabatan, {
        where: {
          id: updateRequest.jabatanId,
        },
      }),

      this.entityManager.findOne(Golongan, {
        where: {
          id: updateRequest.golonganId,
        },
      }),

      this.entityManager.findOne(Agama, {
        where: {
          id: updateRequest.agamaId,
        },
      }),
    ]);

    const data = {
      ...updateRequest,
      statusId: status,
      jabatanId: jabatan,
      golonganId: golongan,
      agamaId: agama,
    };

    await this.entityManager.update(Guru, guruId, data);
    const updatedGuru = await this.entityManager.findOne(Guru, {
      where: {
        id: guruId,
      },
    });

    return {
      data: {
        id: updatedGuru.id,
        nama_lengkap: updatedGuru.nama_lengkap,
        nip: updatedGuru.nip,
        status: {
          id: updatedGuru.statusId ? updatedGuru.statusId.id : null,
          nama_status: updatedGuru.statusId
            ? updatedGuru.statusId.nama_status
            : null,
        },
        jabatan: {
          id: updatedGuru.jabatanId ? updatedGuru.jabatanId.id : null,
          nama_jabatan: updatedGuru.jabatanId
            ? updatedGuru.jabatanId.nama_jabatan
            : null,
        },
        golongan: {
          id: updatedGuru.golonganId ? updatedGuru.golonganId.id : null,
          nama_golongan: updatedGuru.golonganId
            ? updatedGuru.golonganId.nama_golongan
            : null,
        },
        agama: {
          id: updatedGuru.agamaId ? updatedGuru.agamaId.id : null,
          nama_agama: updatedGuru.agamaId
            ? updatedGuru.agamaId.nama_agama
            : null,
        },
        jenis_kelamin: updatedGuru.jenis_kelamin,
        no_telp: updatedGuru.no_telp,
        alamat: updatedGuru.alamat,
      },
    };
  }

  public async delete(guruId: string): Promise<WebResponse> {
    const guru = await this.entityManager.findOne(Guru, {
      where: {
        id: guruId,
      },
    });

    if (!guru) {
      throw new HttpException('Guru not found', HttpStatus.NOT_FOUND);
    }

    await this.entityManager.delete(Guru, guruId);
    return {
      message: 'Guru deleted successfully!',
    };
  }
}
