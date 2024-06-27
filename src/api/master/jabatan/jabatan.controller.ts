import { AuthGuard } from 'src/common/guard/auth.guard';
import { AdminGuard } from 'src/common/guard/admin.guard';
import { JabatanService } from './jabatan.service';
import { JabatanRequest, JabatanResponse } from './dto/jabatan.dto';
import { Controller, Post, Body, UseGuards, Get } from '@nestjs/common';

@Controller('/api/master/jabatan')
export class JabatanController {
  constructor(private readonly jabatanService: JabatanService) {}

  @Post()
  @UseGuards(AuthGuard, AdminGuard)
  public async create(
    @Body() req: JabatanRequest,
  ): Promise<{ data: JabatanResponse }> {
    return this.jabatanService.create(req);
  }

  @Get()
  @UseGuards(AuthGuard, AdminGuard)
  public async findAll(): Promise<{ data: JabatanResponse[] }> {
    return this.jabatanService.findAll();
  }
}
