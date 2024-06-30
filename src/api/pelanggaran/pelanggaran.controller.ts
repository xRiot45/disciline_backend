import { AuthGuard } from 'src/common/guard/auth.guard';
import { AdminGuard } from 'src/common/guard/admin.guard';
import { PelanggaranService } from './pelanggaran.service';
import {
  Controller,
  Post,
  Body,
  UseGuards,
  Get,
  Param,
  Patch,
} from '@nestjs/common';
import { PelanggaranRequest, PelanggaranResponse } from './dto/Pelanggaran.dto';

@Controller('/api/pelanggaran')
export class PelanggaranController {
  constructor(private readonly pelanggaranService: PelanggaranService) {}

  @Post()
  @UseGuards(AuthGuard, AdminGuard)
  public async create(
    @Body() req: PelanggaranRequest,
  ): Promise<{ data: PelanggaranResponse }> {
    return this.pelanggaranService.create(req);
  }

  @Get()
  @UseGuards(AuthGuard, AdminGuard)
  public async findAll(): Promise<{ data: PelanggaranResponse[] }> {
    return this.pelanggaranService.findAll();
  }

  @Get('/:pelanggaranId')
  @UseGuards(AuthGuard, AdminGuard)
  public async findById(
    @Param('pelanggaranId') pelanggaranId: string,
  ): Promise<{ data: PelanggaranResponse }> {
    return this.pelanggaranService.findById(pelanggaranId);
  }

  @Patch('/:pelanggaranId')
  @UseGuards(AuthGuard, AdminGuard)
  public async update(
    @Param('pelanggaranId') pelanggaranId: string,
    @Body() req: PelanggaranRequest,
  ): Promise<{ data: PelanggaranResponse }> {
    return this.pelanggaranService.update(pelanggaranId, req);
  }
}
