import { Pendidikan } from './entities/pendidikan.entity';
import { EntityManager } from 'typeorm';
import { ValidationService } from 'src/common/validation/validation.service';
import { PendidikanValidation } from './pendidikan.validation';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PendidikanRequest, PendidikanResponse } from './dto/pendidikan.dto';

@Injectable()
export class PendidikanService {
  constructor(
    private readonly entityManager: EntityManager,
    private validationService: ValidationService,
  ) {}

  public async create(
    req: PendidikanRequest,
  ): Promise<{ data: PendidikanResponse }> {
    const createRequest = this.validationService.validate(
      PendidikanValidation.CREATE,
      req,
    );

    // Check pendidikan exist in database
    const pendidikanExists = await this.entityManager.findOne(Pendidikan, {
      where: {
        nama_pendidikan: createRequest.nama_pendidikan,
      },
    });

    if (pendidikanExists) {
      throw new HttpException('Pendidikan already exists', HttpStatus.CONFLICT);
    }

    const pendidikan = new Pendidikan(createRequest);
    await this.entityManager.save(pendidikan);

    return {
      data: {
        id: pendidikan.id,
        nama_pendidikan: pendidikan.nama_pendidikan,
      },
    };
  }

  public async findAll(): Promise<{ data: PendidikanResponse[] }> {
    const pendidikan = await this.entityManager.find(Pendidikan, {
      order: {
        createdAt: 'DESC',
      },
    });

    return {
      data: pendidikan.map((item) => ({
        id: item.id,
        nama_pendidikan: item.nama_pendidikan,
      })),
    };
  }

  public async findById(
    pendidikanId: string,
  ): Promise<{ data: PendidikanResponse }> {
    const pendidikan = await this.entityManager.findOne(Pendidikan, {
      where: {
        id: pendidikanId,
      },
    });

    if (!pendidikan) {
      throw new HttpException('Pendidikan not found', HttpStatus.NOT_FOUND);
    }

    return {
      data: {
        id: pendidikan.id,
        nama_pendidikan: pendidikan.nama_pendidikan,
      },
    };
  }
}
