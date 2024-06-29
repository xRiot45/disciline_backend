import { SiswaService } from './siswa.service';
import { SiswaRequest, SiswaResponse } from './dto/siswa.dto';
import { Controller, Post, Body } from '@nestjs/common';

@Controller('siswa')
export class SiswaController {
  constructor(private readonly siswaService: SiswaService) {}

  @Post()
  public async create(
    @Body() req: SiswaRequest,
  ): Promise<{ data: SiswaResponse }> {
    return this.siswaService.create(req);
  }
}
