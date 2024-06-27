import { AuthGuard } from 'src/common/guard/auth.guard';
import { AdminGuard } from 'src/common/guard/admin.guard';
import { WebResponse } from 'src/common/dto/web.dto';
import { PendidikanService } from './pendidikan.service';
import { PendidikanRequest, PendidikanResponse } from './dto/pendidikan.dto';
import {
  Controller,
  Post,
  Body,
  UseGuards,
  Get,
  Param,
  Put,
  Delete,
} from '@nestjs/common';

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

  @Get('/:pendidikanId')
  @UseGuards(AuthGuard, AdminGuard)
  public async findById(
    @Param('pendidikanId') pendidikanId: string,
  ): Promise<{ data: PendidikanResponse }> {
    return this.pendidikanService.findById(pendidikanId);
  }

  @Put('/:pendidikanId')
  @UseGuards(AuthGuard, AdminGuard)
  public async update(
    @Param('pendidikanId') pendidikanId: string,
    @Body() req: PendidikanRequest,
  ): Promise<{ data: PendidikanResponse }> {
    return this.pendidikanService.update(pendidikanId, req);
  }

  @Delete('/:pendidikanId')
  @UseGuards(AuthGuard, AdminGuard)
  public async delete(
    @Param('pendidikanId') pendidikanId: string,
  ): Promise<WebResponse> {
    return this.pendidikanService.delete(pendidikanId);
  }
}
