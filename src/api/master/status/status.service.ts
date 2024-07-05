import { Status } from './entities/status.entity';
import { WebResponse } from '../../../common/dto/web.dto';
import { EntityManager } from 'typeorm';
import { StatusValidation } from './status.validation';
import { ValidationService } from '../../../common/validation/validation.service';
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

  public async findAll(): Promise<{ data: StatusResponse[] }> {
    const statuses = await this.entityManager.find(Status, {
      order: {
        createdAt: 'DESC',
      },
    });

    return {
      data: statuses.map((status) => ({
        id: status.id,
        nama_status: status.nama_status,
      })),
    };
  }

  public async findById(statusId: string): Promise<{ data: StatusResponse }> {
    const status = await this.entityManager.findOne(Status, {
      where: {
        id: statusId,
      },
    });

    if (!status) {
      throw new HttpException('Status not found', HttpStatus.NOT_FOUND);
    }

    return {
      data: {
        id: status.id,
        nama_status: status.nama_status,
      },
    };
  }

  public async update(
    statusId: string,
    req: StatusRequest,
  ): Promise<{ data: StatusResponse }> {
    const updateRequest = this.validationService.validate(
      StatusValidation.UPDATE,
      req,
    );

    const status = await this.entityManager.findOne(Status, {
      where: {
        id: statusId,
      },
    });

    if (!status) {
      throw new HttpException('Status not found', HttpStatus.NOT_FOUND);
    }

    const statusWithSameName = await this.entityManager.findOne(Status, {
      where: {
        nama_status: updateRequest.nama_status,
      },
    });

    if (statusWithSameName && statusWithSameName.id !== status.id) {
      throw new HttpException('Status already exists', HttpStatus.CONFLICT);
    }

    await this.entityManager.update(Status, status.id, updateRequest);
    const updatedStatus = await this.entityManager.findOne(Status, {
      where: {
        id: status.id,
      },
    });

    return {
      data: {
        id: updatedStatus.id,
        nama_status: updatedStatus.nama_status,
      },
    };
  }

  public async delete(statusId: string): Promise<WebResponse> {
    const status = await this.entityManager.findOne(Status, {
      where: {
        id: statusId,
      },
    });

    if (!status) {
      throw new HttpException('Status not found', HttpStatus.NOT_FOUND);
    }

    await this.entityManager.delete(Status, status.id);
    return {
      message: 'Status deleted successfully!',
    };
  }
}
