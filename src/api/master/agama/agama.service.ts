import { Agama } from './entities/agama.entity';
import { EntityManager } from 'typeorm';
import { AgamaValidation } from './agama.validation';
import { ValidationService } from 'src/common/validation/validation.service';
import { AgamaRequest, AgamaResponse } from './dto/agama.dto';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

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
    const agama = await this.entityManager.find(Agama);

    return {
      data: agama.map((agama) => ({
        id: agama.id,
        nama_agama: agama.nama_agama,
      })),
    };
  }
}
