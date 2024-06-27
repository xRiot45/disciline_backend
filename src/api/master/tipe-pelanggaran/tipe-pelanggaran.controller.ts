import { AuthGuard } from 'src/common/guard/auth.guard';
import { AdminGuard } from 'src/common/guard/admin.guard';
import { WebResponse } from 'src/common/dto/web.dto';
import { TipePelanggaranService } from './tipe-pelanggaran.service';
import {
  TipePelanggaranRequest,
  TipePelanggaranResponse,
} from './dto/tipe-pelanggaran.dto';
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

@Controller('/api/master/tipe-pelanggaran')
export class TipePelanggaranController {
  constructor(
    private readonly tipePelanggaranService: TipePelanggaranService,
  ) {}

  @Post()
  @UseGuards(AdminGuard, AuthGuard)
  public async create(
    @Body() req: TipePelanggaranRequest,
  ): Promise<{ data: TipePelanggaranResponse }> {
    return this.tipePelanggaranService.create(req);
  }

  @Get()
  @UseGuards(AdminGuard, AuthGuard)
  public async findAll(): Promise<{ data: TipePelanggaranResponse[] }> {
    return this.tipePelanggaranService.findAll();
  }

  @Get('/:tipePelanggaranId')
  @UseGuards(AdminGuard, AuthGuard)
  public async findById(
    @Param('tipePelanggaranId') tipePelanggaranId: string,
  ): Promise<{ data: TipePelanggaranResponse }> {
    return this.tipePelanggaranService.findById(tipePelanggaranId);
  }

  @Put('/:tipePelanggaranId')
  @UseGuards(AdminGuard, AuthGuard)
  public async update(
    @Param('tipePelanggaranId') tipePelanggaranId: string,
    @Body() req: TipePelanggaranRequest,
  ): Promise<{ data: TipePelanggaranResponse }> {
    return this.tipePelanggaranService.update(tipePelanggaranId, req);
  }

  @Delete('/:tipePelanggaranId')
  @UseGuards(AdminGuard, AuthGuard)
  public async delete(
    @Param('tipePelanggaranId') tipePelanggaranId: string,
  ): Promise<WebResponse> {
    return this.tipePelanggaranService.delete(tipePelanggaranId);
  }
}
