import { AuthGuard } from 'src/common/guard/auth.guard';
import { AdminGuard } from 'src/common/guard/admin.guard';
import { TipePelanggaranService } from './tipe-pelanggaran.service';
import { Controller, Post, Body, UseGuards, Get } from '@nestjs/common';
import {
  TipePelanggaranRequest,
  TipePelanggaranResponse,
} from './dto/tipe-pelanggaran.dto';

@Controller('/api/master/tipe-pelanggaran')
export class TipePelanggaranController {
  constructor(
    private readonly tipePelanggaranService: TipePelanggaranService,
  ) {}

  @Post()
  @UseGuards(AdminGuard, AuthGuard)
  public async create(
    @Body() req: TipePelanggaranRequest,
  ): Promise<{ data: TipePelanggaranResponse }> {
    return this.tipePelanggaranService.create(req);
  }

  @Get()
  @UseGuards(AuthGuard)
  public async findAll(): Promise<{ data: TipePelanggaranResponse[] }> {
    return this.tipePelanggaranService.findAll();
  }
}
