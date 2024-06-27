import { Golongan } from './entities/golongan.entity';
import { EntityManager } from 'typeorm';
import { ValidationService } from 'src/common/validation/validation.service';
import { GolonganValidation } from './golongan.validation';
import { GolonganRequest, GolonganResponse } from './dto/golongan.dto';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class GolonganService {
  constructor(
    private readonly entityManager: EntityManager,
    private validationService: ValidationService,
  ) {}

  public async create(
    req: GolonganRequest,
  ): Promise<{ data: GolonganResponse }> {
    const createRequest = this.validationService.validate(
      GolonganValidation.CREATE,
      req,
    );

    // Check golongan exist in database
    const golonganExists = await this.entityManager.findOne(Golongan, {
      where: {
        nama_golongan: createRequest.nama_golongan,
      },
    });

    if (golonganExists) {
      throw new HttpException('Golongan already exists', HttpStatus.CONFLICT);
    }

    const golongan = new Golongan(createRequest);
    await this.entityManager.save(golongan);

    return {
      data: {
        id: golongan.id,
        nama_golongan: golongan.nama_golongan,
      },
    };
  }

  public async findAll(): Promise<{ data: GolonganResponse[] }> {
    const golongans = await this.entityManager.find(Golongan, {
      order: {
        createdAt: 'DESC',
      },
    });

    return {
      data: golongans.map((golongan) => ({
        id: golongan.id,
        nama_golongan: golongan.nama_golongan,
      })),
    };
  }

  public async findById(
    golonganId: string,
  ): Promise<{ data: GolonganResponse }> {
    const golongan = await this.entityManager.findOne(Golongan, {
      where: {
        id: golonganId,
      },
    });

    if (!golongan) {
      throw new HttpException('Golongan not found', HttpStatus.NOT_FOUND);
    }

    return {
      data: {
        id: golongan.id,
        nama_golongan: golongan.nama_golongan,
      },
    };
  }
}
