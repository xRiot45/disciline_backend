import { AuthGuard } from 'src/common/guard/auth.guard';
import { AdminGuard } from 'src/common/guard/admin.guard';
import { PelanggaranService } from './pelanggaran.service';
import { Controller, Post, Body, UseGuards } from '@nestjs/common';
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
}
