import { Guru } from '../guru/entities/guru.entity';
import { Kelas } from './entities/kelas.entity';
import { Jurusan } from '../master/jurusan/entities/jurusan.entity';
import { WebResponse } from '../../common/dto/web.dto';
import { EntityManager } from 'typeorm';
import { KelasValidation } from './kelas.validation';
import { ValidationService } from '../../common/validation/validation.service';
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
          id: jurusan ? jurusan.id : null,
          nama_jurusan: jurusan ? jurusan.nama_jurusan : null,
        },
        guru: {
          id: guru ? guru.id : null,
          nama_guru: guru ? guru.nama_lengkap : null,
          no_telp: guru ? guru.no_telp : null,
        },
      },
    };
  }

  public async findAll(): Promise<{ data: KelasResponse[] }> {
    const kelas = await this.entityManager.find(Kelas, {
      order: {
        createdAt: 'DESC',
      },
    });

    const data: KelasResponse[] = kelas.map((item) => {
      return {
        id: item.id,
        nama_kelas: item.nama_kelas,
        jurusan: {
          id: item.jurusanId ? item.jurusanId.id : null,
          nama_jurusan: item.jurusanId ? item.jurusanId.nama_jurusan : null,
        },
        guru: {
          id: item.guruId ? item.guruId.id : null,
          nama_guru: item.guruId ? item.guruId.nama_lengkap : null,
          no_telp: item.guruId ? item.guruId.no_telp : null,
        },
      };
    });

    return { data };
  }

  public async findById(kelasId: string): Promise<{ data: KelasResponse }> {
    const kelas = await this.entityManager.findOne(Kelas, {
      where: {
        id: kelasId,
      },
    });

    if (!kelas) {
      throw new HttpException('Kelas not found', HttpStatus.NOT_FOUND);
    }

    return {
      data: {
        id: kelas.id,
        nama_kelas: kelas.nama_kelas,
        jurusan: {
          id: kelas.jurusanId ? kelas.jurusanId.id : null,
          nama_jurusan: kelas.jurusanId ? kelas.jurusanId.nama_jurusan : null,
        },
        guru: {
          id: kelas.guruId ? kelas.guruId.id : null,
          nama_guru: kelas.guruId ? kelas.guruId.nama_lengkap : null,
          no_telp: kelas.guruId ? kelas.guruId.no_telp : null,
        },
      },
    };
  }

  public async update(
    kelasId: string,
    req: KelasRequest,
  ): Promise<{ data: KelasResponse }> {
    const updateRequest = this.validationService.validate(
      KelasValidation.UPDATE,
      req,
    );

    const kelas = await this.entityManager.findOne(Kelas, {
      where: {
        id: kelasId,
      },
    });

    if (!kelas) {
      throw new HttpException('Kelas not found', HttpStatus.NOT_FOUND);
    }

    const kelasWithSameName = await this.entityManager.findOne(Kelas, {
      where: {
        nama_kelas: updateRequest.nama_kelas,
      },
    });

    if (kelasWithSameName && kelasWithSameName.id !== kelas.id) {
      throw new HttpException('Kelas already exists', HttpStatus.CONFLICT);
    }

    const [jurusan, guru] = await Promise.all([
      this.entityManager.findOne(Jurusan, {
        where: {
          id: updateRequest.jurusanId,
        },
      }),

      this.entityManager.findOne(Guru, {
        where: {
          id: updateRequest.guruId,
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
      ...updateRequest,
      jurusanId: jurusan,
      guruId: guru,
    };

    await this.entityManager.update(Kelas, kelasId, data);
    const updatedKelas = await this.entityManager.findOne(Kelas, {
      where: {
        id: kelasId,
      },
    });

    return {
      data: {
        id: updatedKelas.id,
        nama_kelas: updatedKelas.nama_kelas,
        jurusan: {
          id: jurusan ? jurusan.id : null,
          nama_jurusan: jurusan ? jurusan.nama_jurusan : null,
        },
        guru: {
          id: guru ? guru.id : null,
          nama_guru: guru ? guru.nama_lengkap : null,
          no_telp: guru ? guru.no_telp : null,
        },
      },
    };
  }

  public async delete(kelasId: string): Promise<WebResponse> {
    const kelas = await this.entityManager.findOne(Kelas, {
      where: {
        id: kelasId,
      },
    });

    if (!kelas) {
      throw new HttpException('Kelas not found', HttpStatus.NOT_FOUND);
    }

    await this.entityManager.delete(Kelas, kelasId);
    return {
      message: 'Kelas deleted successfully!',
    };
  }
}
