import { AuthGuard } from 'src/common/guard/auth.guard';
import { AdminGuard } from 'src/common/guard/admin.guard';
import { KelasService } from './kelas.service';
import { KelasRequest, KelasResponse } from './dto/kelas.dto';
import {
  Controller,
  Post,
  Body,
  UseGuards,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';

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

  @Get()
  @UseGuards(AuthGuard, AdminGuard)
  public async findAll(): Promise<{ data: KelasResponse[] }> {
    return this.kelasService.findAll();
  }

  @Get('/:kelasId')
  @UseGuards(AuthGuard, AdminGuard)
  public async findById(
    @Param('kelasId') kelasId: string,
  ): Promise<{ data: KelasResponse }> {
    return this.kelasService.findById(kelasId);
  }

  @Patch('/:kelasId')
  @UseGuards(AuthGuard, AdminGuard)
  public async update(
    @Param('kelasId') kelasId: string,
    @Body() req: KelasRequest,
  ): Promise<{ data: KelasResponse }> {
    return this.kelasService.update(kelasId, req);
  }

  @Delete('/:kelasId')
  @UseGuards(AuthGuard, AdminGuard)
  public async delete(
    @Param('kelasId') kelasId: string,
  ): Promise<{ message: string }> {
    return this.kelasService.delete(kelasId);
  }
}
