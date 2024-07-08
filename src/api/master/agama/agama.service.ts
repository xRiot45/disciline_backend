import { Agama } from './entities/agama.entity';
import { WebResponse } from '../../../common/dto/web.dto';
import { EntityManager } from 'typeorm';
import { AgamaValidation } from './agama.validation';
import { ValidationService } from '../../../common/validation/validation.service';
import { AgamaRequest, AgamaResponse } from './dto/agama.dto';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

// Provider adalah salah satu fitur yang paling penting di NestJS yang memungkinkan kita untuk membuat class yang dapat diinject atau digunakan ke dalam class lain. Dalam hal ini, kita membuat AgamaService yang akan digunakan untuk mengakses database dan melakukan operasi CRUD terhadap tabel agama.
@Injectable()
export class AgamaService {
  constructor(
    private readonly entityManager: EntityManager,
    private validationService: ValidationService,
  ) {}

  public async create(req: AgamaRequest): Promise<{ data: AgamaResponse }> {
    const createRequest = this.validationService.validate(
      AgamaValidation.CREATE,
      req,
    );

    // Agama exist in database check
    const agamaExists = await this.entityManager.findOne(Agama, {
      where: {
        nama_agama: createRequest.nama_agama,
      },
    });

    if (agamaExists) {
      throw new HttpException('Agama already exists', HttpStatus.CONFLICT);
    }

    const agama = new Agama(createRequest);
    await this.entityManager.save(agama);

    return {
      data: {
        id: agama.id,
        nama_agama: agama.nama_agama,
      },
    };
  }

  public async findAll(): Promise<{ data: AgamaResponse[] }> {
    const agama = await this.entityManager.find(Agama, {
      order: {
        createdAt: 'DESC',
      },
    });

    return {
      data: agama.map((agama) => ({
        id: agama.id,
        nama_agama: agama.nama_agama,
      })),
    };
  }

  public async findById(agamaId: string): Promise<{ data: AgamaResponse }> {
    const agama = await this.entityManager.findOne(Agama, {
      where: {
        id: agamaId,
      },
    });

    if (!agama) {
      throw new HttpException('Agama not found', HttpStatus.NOT_FOUND);
    }

    return {
      data: {
        id: agama.id,
        nama_agama: agama.nama_agama,
      },
    };
  }

  public async update(
    agamaId: string,
    req: AgamaRequest,
  ): Promise<{ data: AgamaResponse }> {
    const updateRequest = this.validationService.validate(
      AgamaValidation.UPDATE,
      req,
    );

    const agama = await this.entityManager.findOne(Agama, {
      where: {
        id: agamaId,
      },
    });

    if (!agama) {
      throw new HttpException('Agama not found', HttpStatus.NOT_FOUND);
    }

    const agamaWithSameName = await this.entityManager.findOne(Agama, {
      where: {
        nama_agama: updateRequest.nama_agama,
      },
    });

    if (agamaWithSameName && agamaWithSameName.id !== agama.id) {
      throw new HttpException('Agama already exists', HttpStatus.CONFLICT);
    }

    await this.entityManager.update(Agama, agama.id, updateRequest);
    const updatedAgama = await this.entityManager.findOne(Agama, {
      where: {
        id: agama.id,
      },
    });

    return {
      data: {
        id: updatedAgama.id,
        nama_agama: updatedAgama.nama_agama,
      },
    };
  }

  public async delete(agamaId: string): Promise<WebResponse> {
    const agama = await this.entityManager.findOne(Agama, {
      where: {
        id: agamaId,
      },
    });

    if (!agama) {
      throw new HttpException('Agama not found', HttpStatus.NOT_FOUND);
    }

    await this.entityManager.delete(Agama, agama.id);
    return {
      message: 'Agama deleted successfully!',
    };
  }
}
