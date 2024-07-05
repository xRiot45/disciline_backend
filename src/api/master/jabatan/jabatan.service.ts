import { Jabatan } from './entities/jabatan.entity';
import { WebResponse } from '../../../common/dto/web.dto';
import { EntityManager } from 'typeorm';
import { ValidationService } from '../../../common/validation/validation.service';
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

  public async findById(jabatanId: string): Promise<{ data: JabatanResponse }> {
    const jabatan = await this.entityManager.findOne(Jabatan, {
      where: {
        id: jabatanId,
      },
    });

    if (!jabatan) {
      throw new HttpException('Jabatan not found', HttpStatus.NOT_FOUND);
    }

    return {
      data: {
        id: jabatan.id,
        nama_jabatan: jabatan.nama_jabatan,
      },
    };
  }

  public async update(
    jabatanId: string,
    req: JabatanRequest,
  ): Promise<{ data: JabatanResponse }> {
    const updateRequest = this.validationService.validate(
      JabatanValidation.UPDATE,
      req,
    );

    const jabatan = await this.entityManager.findOne(Jabatan, {
      where: {
        id: jabatanId,
      },
    });

    if (!jabatan) {
      throw new HttpException('Jabatan not found', HttpStatus.NOT_FOUND);
    }

    const jabatanWithSameName = await this.entityManager.findOne(Jabatan, {
      where: {
        nama_jabatan: updateRequest.nama_jabatan,
      },
    });

    if (jabatanWithSameName && jabatanWithSameName.id !== jabatan.id) {
      throw new HttpException('Jabatan already exists', HttpStatus.CONFLICT);
    }

    await this.entityManager.update(Jabatan, jabatanId, updateRequest);
    const updatedJabatan = await this.entityManager.findOne(Jabatan, {
      where: {
        id: jabatanId,
      },
    });

    return {
      data: {
        id: updatedJabatan.id,
        nama_jabatan: updatedJabatan.nama_jabatan,
      },
    };
  }

  public async delete(jabatanId: string): Promise<WebResponse> {
    const jabatan = await this.entityManager.findOne(Jabatan, {
      where: {
        id: jabatanId,
      },
    });

    if (!jabatan) {
      throw new HttpException('Jabatan not found', HttpStatus.NOT_FOUND);
    }

    await this.entityManager.delete(Jabatan, jabatanId);
    return {
      message: 'Jabatan deleted successfully',
    };
  }
}
