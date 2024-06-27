import { Status } from './entities/status.entity';
import { EntityManager } from 'typeorm';
import { StatusValidation } from './status.validation';
import { ValidationService } from 'src/common/validation/validation.service';
import { StatusRequest, StatusResponse } from './dto/status.dto';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class StatusService {
  constructor(
    private readonly entityManager: EntityManager,
    private validationService: ValidationService,
  ) {}

  public async create(req: StatusRequest): Promise<{ data: StatusResponse }> {
    const createRequest = this.validationService.validate(
      StatusValidation.CREATE,
      req,
    );

    // Check status exist in database
    const statusExists = await this.entityManager.findOne(Status, {
      where: {
        nama_status: createRequest.nama_status,
      },
    });

    if (statusExists) {
      throw new HttpException('Status already exists', HttpStatus.CONFLICT);
    }

    const status = new Status(createRequest);
    await this.entityManager.save(status);

    return {
      data: {
        id: status.id,
        nama_status: status.nama_status,
      },
    };
  }
}
