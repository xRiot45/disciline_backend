import { AuthGuard } from 'src/common/guard/auth.guard';
import { AdminGuard } from 'src/common/guard/admin.guard';
import { JurusanService } from './jurusan.service';
import { JurusanRequest, JurusanResponse } from './dto/jurusan.dto';
import { Controller, Post, Body, UseGuards, Get } from '@nestjs/common';

@Controller('/api/master/jurusan')
export class JurusanController {
  constructor(private readonly jurusanService: JurusanService) {}

  @Post()
  @UseGuards(AuthGuard, AdminGuard)
  public async create(
    @Body() req: JurusanRequest,
  ): Promise<{ data: JurusanResponse }> {
    return this.jurusanService.create(req);
  }

  @Get()
  @UseGuards(AuthGuard, AdminGuard)
  public async findAll(): Promise<{ data: JurusanResponse[] }> {
    return this.jurusanService.findAll();
  }
}
