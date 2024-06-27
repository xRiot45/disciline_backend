import { Guru } from '../guru/entities/guru.entity';
import { Kelas } from './entities/kelas.entity';
import { Jurusan } from '../master/jurusan/entities/jurusan.entity';
import { EntityManager } from 'typeorm';
import { KelasValidation } from './kelas.validation';
import { ValidationService } from 'src/common/validation/validation.service';
import { KelasRequest, KelasResponse } from './dto/kelas.dto';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class KelasService {
  constructor(
    private readonly entityManager: EntityManager,
    private validationService: ValidationService,
  ) {}

  public async create(req: KelasRequest): Promise<{ data: KelasResponse }> {
    const createRequest = this.validationService.validate(
      KelasValidation.CREATE,
      req,
    );

    // Check kelas exist in database
    const kelasExists = await this.entityManager.findOne(Kelas, {
      where: {
        nama_kelas: createRequest.nama_kelas,
      },
    });

    if (kelasExists) {
      throw new HttpException('Kelas already exists', HttpStatus.CONFLICT);
    }

    const [jurusan, guru] = await Promise.all([
      this.entityManager.findOne(Jurusan, {
        where: {
          id: createRequest.jurusanId,
        },
      }),

      this.entityManager.findOne(Guru, {
        where: {
          id: createRequest.guruId,
        },
      }),
    ]);

    if (!jurusan) {
      throw new HttpException('Jurusan not found', HttpStatus.NOT_FOUND);
    }

    if (!guru) {
      throw new HttpException('Guru not found', HttpStatus.NOT_FOUND);
    }

    const data = {
      ...createRequest,
      jurusanId: jurusan,
      guruId: guru,
    };

    const kelas = new Kelas(data);
    const savedKelas = await this.entityManager.save(kelas);

    return {
      data: {
        id: savedKelas.id,
        nama_kelas: savedKelas.nama_kelas,
        jurusan: {
          nama_jurusan: jurusan ? jurusan.nama_jurusan : null,
        },
        guru: {
          nama_guru: guru ? guru.nama_lengkap : null,
          no_telp: guru ? guru.no_telp : null,
        },
      },
    };
  }
}
