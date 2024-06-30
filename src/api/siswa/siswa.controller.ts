import { AuthGuard } from 'src/common/guard/auth.guard';
import { AdminGuard } from 'src/common/guard/admin.guard';
import { SiswaService } from './siswa.service';
import { SiswaRequest, SiswaResponse } from './dto/siswa.dto';
import { Controller, Post, Body, UseGuards, Get } from '@nestjs/common';

@Controller('/api/siswa')
export class SiswaController {
  constructor(private readonly siswaService: SiswaService) {}

  @Post()
  @UseGuards(AuthGuard, AdminGuard)
  public async create(
    @Body() req: SiswaRequest,
  ): Promise<{ data: SiswaResponse }> {
    return this.siswaService.create(req);
  }

  @Get()
  @UseGuards(AuthGuard, AdminGuard)
  public async findAll(): Promise<{ data: SiswaResponse[] }> {
    return this.siswaService.findAll();
  }
}
