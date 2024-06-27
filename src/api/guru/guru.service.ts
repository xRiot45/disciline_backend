import { Guru } from './entities/guru.entity';
import { Agama } from '../master/agama/entities/agama.entity';
import { Status } from '../master/status/entities/status.entity';
import { Jabatan } from '../master/jabatan/entities/jabatan.entity';
import { Golongan } from '../master/golongan/entities/golongan.entity';
import { EntityManager } from 'typeorm';
import { GuruValidation } from './guru.validation';
import { ValidationService } from 'src/common/validation/validation.service';
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
          nama_status: status ? status.nama_status : null,
        },
        jabatan: {
          nama_jabatan: jabatan ? jabatan.nama_jabatan : null,
        },
        golongan: {
          nama_golongan: golongan ? golongan.nama_golongan : null,
        },
        agama: {
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
          nama_status: (item.statusId as unknown as Status)?.nama_status,
        },
        jabatan: {
          nama_jabatan: (item.jabatanId as unknown as Jabatan)?.nama_jabatan,
        },
        golongan: {
          nama_golongan: (item.golonganId as unknown as Golongan)
            ?.nama_golongan,
        },
        agama: {
          nama_agama: (item.agamaId as unknown as Agama)?.nama_agama,
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
          nama_status: (guru.statusId as unknown as Status)?.nama_status,
        },
        jabatan: {
          nama_jabatan: (guru.jabatanId as unknown as Jabatan)?.nama_jabatan,
        },
        golongan: {
          nama_golongan: (guru.golonganId as unknown as Golongan)
            ?.nama_golongan,
        },
        agama: {
          nama_agama: (guru.agamaId as unknown as Agama)?.nama_agama,
        },
        jenis_kelamin: guru.jenis_kelamin,
        no_telp: guru.no_telp,
        alamat: guru.alamat,
      },
    };
  }
}
