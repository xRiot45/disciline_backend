import { Jabatan } from './entities/jabatan.entity';
import { EntityManager } from 'typeorm';
import { ValidationService } from 'src/common/validation/validation.service';
import { JabatanValidation } from './jabatan.validation';
import { JabatanRequest, JabatanResponse } from './dto/jabatan.dto';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class JabatanService {
  constructor(
    private readonly entityManager: EntityManager,
    private validationService: ValidationService,
  ) {}

  public async create(req: JabatanRequest): Promise<{ data: JabatanResponse }> {
    const createRequest = this.validationService.validate(
      JabatanValidation.CREATE,
      req,
    );

    // Check if jabatan already exists
    const jabatanExists = await this.entityManager.findOne(Jabatan, {
      where: {
        nama_jabatan: createRequest.nama_jabatan,
      },
    });

    if (jabatanExists) {
      throw new HttpException('Jabatan already exists', HttpStatus.CONFLICT);
    }

    const jabatan = new Jabatan(createRequest);
    await this.entityManager.save(jabatan);

    return {
      data: {
        id: jabatan.id,
        nama_jabatan: jabatan.nama_jabatan,
      },
    };
  }

  public async findAll(): Promise<{ data: JabatanResponse[] }> {
    const jabatan = await this.entityManager.find(Jabatan, {
      order: {
        createdAt: 'DESC',
      },
    });
    return {
      data: jabatan.map((jabatan) => ({
        id: jabatan.id,
        nama_jabatan: jabatan.nama_jabatan,
      })),
    };
  }
}
