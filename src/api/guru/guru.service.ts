import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { EntityManager } from 'typeorm';
import { ValidationService } from 'src/common/validation/validation.service';
import { GuruRequest, GuruResponse } from './dto/guru.dto';
import { GuruValidation } from './guru.validation';
import { Guru } from './entities/guru.entity';
import { Status } from '../master/status/entities/status.entity';
import { Jabatan } from '../master/jabatan/entities/jabatan.entity';
import { Golongan } from '../master/golongan/entities/golongan.entity';
import { Agama } from '../master/agama/entities/agama.entity';

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
}
