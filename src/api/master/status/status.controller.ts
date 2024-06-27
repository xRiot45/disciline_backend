import { AuthGuard } from 'src/common/guard/auth.guard';
import { AdminGuard } from 'src/common/guard/admin.guard';
import { StatusService } from './status.service';
import { StatusRequest, StatusResponse } from './dto/status.dto';
import {
  Controller,
  Post,
  Body,
  UseGuards,
  Get,
  Param,
  Put,
} from '@nestjs/common';

@Controller('/api/master/status')
export class StatusController {
  constructor(private readonly statusService: StatusService) {}

  @Post()
  @UseGuards(AuthGuard, AdminGuard)
  public async create(
    @Body() req: StatusRequest,
  ): Promise<{ data: StatusResponse }> {
    return this.statusService.create(req);
  }

  @Get()
  @UseGuards(AuthGuard, AdminGuard)
  public async findAll(): Promise<{ data: StatusResponse[] }> {
    return this.statusService.findAll();
  }

  @Get('/:statusId')
  @UseGuards(AuthGuard, AdminGuard)
  public async findById(
    @Param('statusId') statusId: string,
  ): Promise<{ data: StatusResponse }> {
    return this.statusService.findById(statusId);
  }

  @Put('/:statusId')
  @UseGuards(AuthGuard, AdminGuard)
  public async update(
    @Param('statusId') statusId: string,
    @Body() req: StatusRequest,
  ): Promise<{ data: StatusResponse }> {
    return this.statusService.update(statusId, req);
  }
}
