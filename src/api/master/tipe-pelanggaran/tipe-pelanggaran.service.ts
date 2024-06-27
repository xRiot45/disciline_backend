import { EntityManager } from 'typeorm';
import { TipePelanggaran } from './entities/tipe-pelanggaran.entity';
import { ValidationService } from 'src/common/validation/validation.service';
import { TipePelanggaranValidation } from './tipe-pelanggaran.validation';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import {
  TipePelanggaranRequest,
  TipePelanggaranResponse,
} from './dto/tipe-pelanggaran.dto';

@Injectable()
export class TipePelanggaranService {
  constructor(
    private readonly entityManager: EntityManager,
    private validationService: ValidationService,
  ) {}

  public async create(
    req: TipePelanggaranRequest,
  ): Promise<{ data: TipePelanggaranResponse }> {
    const createRequest = this.validationService.validate(
      TipePelanggaranValidation.CREATE,
      req,
    );

    // Check tipe pelanggaran exist in database
    const tipePelanggaranExists = await this.entityManager.findOne(
      TipePelanggaran,
      {
        where: {
          nama_tipe_pelanggaran: createRequest.nama_tipe_pelanggaran,
        },
      },
    );

    if (tipePelanggaranExists) {
      throw new HttpException(
        'Tipe Pelanggaran already exists',
        HttpStatus.CONFLICT,
      );
    }

    const tipePelanggaran = new TipePelanggaran(createRequest);
    await this.entityManager.save(tipePelanggaran);

    return {
      data: {
        id: tipePelanggaran.id,
        nama_tipe_pelanggaran: tipePelanggaran.nama_tipe_pelanggaran,
      },
    };
  }

  public async findAll(): Promise<{ data: TipePelanggaranResponse[] }> {
    const tipePelanggaran = await this.entityManager.find(TipePelanggaran, {
      order: {
        createdAt: 'DESC',
      },
    });

    return {
      data: tipePelanggaran.map((item) => ({
        id: item.id,
        nama_tipe_pelanggaran: item.nama_tipe_pelanggaran,
      })),
    };
  }

  public async findById(
    tipePelanggaranId: string,
  ): Promise<{ data: TipePelanggaranResponse }> {
    const tipePelanggaran = await this.entityManager.findOne(TipePelanggaran, {
      where: {
        id: tipePelanggaranId,
      },
    });

    if (!tipePelanggaran) {
      throw new HttpException(
        'Tipe Pelanggaran not found',
        HttpStatus.NOT_FOUND,
      );
    }

    return {
      data: {
        id: tipePelanggaran.id,
        nama_tipe_pelanggaran: tipePelanggaran.nama_tipe_pelanggaran,
      },
    };
  }
}
