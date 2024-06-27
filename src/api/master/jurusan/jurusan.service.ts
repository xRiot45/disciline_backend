import { Jurusan } from './entities/jurusan.entity';
import { EntityManager } from 'typeorm';
import { ValidationService } from 'src/common/validation/validation.service';
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
}
