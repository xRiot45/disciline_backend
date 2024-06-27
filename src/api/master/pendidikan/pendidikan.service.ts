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
}
