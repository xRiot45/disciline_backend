import { AuthGuard } from 'src/common/guard/auth.guard';
import { AdminGuard } from 'src/common/guard/admin.guard';
import { KelasService } from './kelas.service';
import { KelasRequest, KelasResponse } from './dto/kelas.dto';
import { Controller, Post, Body, UseGuards } from '@nestjs/common';

@Controller('/api/kelas')
export class KelasController {
  constructor(private readonly kelasService: KelasService) {}

  @Post()
  @UseGuards(AuthGuard, AdminGuard)
  public async create(
    @Body() req: KelasRequest,
  ): Promise<{ data: KelasResponse }> {
    return this.kelasService.create(req);
  }
}
