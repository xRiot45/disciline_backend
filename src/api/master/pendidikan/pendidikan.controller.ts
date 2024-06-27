import { AuthGuard } from 'src/common/guard/auth.guard';
import { AdminGuard } from 'src/common/guard/admin.guard';
import { PendidikanService } from './pendidikan.service';
import { PendidikanRequest, PendidikanResponse } from './dto/pendidikan.dto';
import { Controller, Post, Body, UseGuards, Get } from '@nestjs/common';

@Controller('/api/master/pendidikan')
export class PendidikanController {
  constructor(private readonly pendidikanService: PendidikanService) {}

  @Post()
  @UseGuards(AuthGuard, AdminGuard)
  public async create(
    @Body() req: PendidikanRequest,
  ): Promise<{ data: PendidikanResponse }> {
    return this.pendidikanService.create(req);
  }

  @Get()
  @UseGuards(AuthGuard, AdminGuard)
  public async findAll(): Promise<{ data: PendidikanResponse[] }> {
    return this.pendidikanService.findAll();
  }
}
