import { AuthGuard } from 'src/common/guard/auth.guard';
import { AdminGuard } from 'src/common/guard/admin.guard';
import { StatusService } from './status.service';
import { StatusRequest, StatusResponse } from './dto/status.dto';
import { Controller, Post, Body, UseGuards, Get } from '@nestjs/common';

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
}
