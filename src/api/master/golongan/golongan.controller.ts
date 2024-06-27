import { AuthGuard } from 'src/common/guard/auth.guard';
import { AdminGuard } from 'src/common/guard/admin.guard';
import { GolonganService } from './golongan.service';
import { GolonganRequest, GolonganResponse } from './dto/golongan.dto';
import { Controller, Post, Body, UseGuards, Get } from '@nestjs/common';

@Controller('/api/master/golongan')
export class GolonganController {
  constructor(private readonly golonganService: GolonganService) {}

  @Post()
  @UseGuards(AuthGuard, AdminGuard)
  public async create(
    @Body() req: GolonganRequest,
  ): Promise<{ data: GolonganResponse }> {
    return this.golonganService.create(req);
  }

  @Get()
  @UseGuards(AuthGuard, AdminGuard)
  public async findAll(): Promise<{ data: GolonganResponse[] }> {
    return this.golonganService.findAll();
  }
}
