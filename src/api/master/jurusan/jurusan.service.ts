import { Jurusan } from './entities/jurusan.entity';
import { WebResponse } from '../../../common/dto/web.dto';
import { EntityManager } from 'typeorm';
import { ValidationService } from '../../../common/validation/validation.service';
import { JurusanValidation } from './jurusan.validation';
import { JurusanRequest, JurusanResponse } from './dto/jurusan.dto';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class JurusanService {
  constructor(
    private readonly entityManager: EntityManager,
    private validationService: ValidationService,
  ) {}

  public async create(req: JurusanRequest): Promise<{ data: JurusanResponse }> {
    const createRequest = this.validationService.validate(
      JurusanValidation.CREATE,
      req,
    );

    // Check jurusan exist in database
    const jurusanExists = await this.entityManager.findOne(Jurusan, {
      where: {
        nama_jurusan: createRequest.nama_jurusan,
      },
    });

    if (jurusanExists) {
      throw new HttpException('Jurusan already exists', HttpStatus.CONFLICT);
    }

    const jurusan = new Jurusan(createRequest);
    await this.entityManager.save(jurusan);

    return {
      data: {
        id: jurusan.id,
        nama_jurusan: jurusan.nama_jurusan,
      },
    };
  }

  public async findAll(): Promise<{ data: JurusanResponse[] }> {
    const jurusan = await this.entityManager.find(Jurusan, {
      order: {
        createdAt: 'DESC',
      },
    });

    return {
      data: jurusan.map((item) => ({
        id: item.id,
        nama_jurusan: item.nama_jurusan,
      })),
    };
  }

  public async findById(jurusanId: string): Promise<{ data: JurusanResponse }> {
    const jurusan = await this.entityManager.findOne(Jurusan, {
      where: {
        id: jurusanId,
      },
    });

    if (!jurusan) {
      throw new HttpException('Jurusan not found', HttpStatus.NOT_FOUND);
    }

    return {
      data: {
        id: jurusan.id,
        nama_jurusan: jurusan.nama_jurusan,
      },
    };
  }

  public async update(
    jurusanId: string,
    req: JurusanRequest,
  ): Promise<{ data: JurusanResponse }> {
    const updateRequest = this.validationService.validate(
      JurusanValidation.UPDATE,
      req,
    );

    const jurusan = await this.entityManager.findOne(Jurusan, {
      where: {
        id: jurusanId,
      },
    });

    if (!jurusan) {
      throw new HttpException('Jurusan not found', HttpStatus.NOT_FOUND);
    }

    const jurusanWithSameName = await this.entityManager.findOne(Jurusan, {
      where: {
        nama_jurusan: updateRequest.nama_jurusan,
      },
    });

    if (jurusanWithSameName && jurusanWithSameName.id !== jurusan.id) {
      throw new HttpException('Jurusan already exists', HttpStatus.CONFLICT);
    }

    await this.entityManager.update(Jurusan, jurusan.id, updateRequest);
    const updatedJurusan = await this.entityManager.findOne(Jurusan, {
      where: {
        id: jurusan.id,
      },
    });

    return {
      data: {
        id: updatedJurusan.id,
        nama_jurusan: updatedJurusan.nama_jurusan,
      },
    };
  }

  public async delete(jurusanId: string): Promise<WebResponse> {
    const jurusan = await this.entityManager.findOne(Jurusan, {
      where: {
        id: jurusanId,
      },
    });

    if (!jurusan) {
      throw new HttpException('Jurusan not found', HttpStatus.NOT_FOUND);
    }

    await this.entityManager.delete(Jurusan, jurusan.id);
    return {
      message: 'Jurusan deleted successfully!',
    };
  }
}
