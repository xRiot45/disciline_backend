import { AuthGuard } from '../../common/guard/auth.guard';
import { AdminGuard } from '../../common/guard/admin.guard';
import { PelanggaranService } from './pelanggaran.service';
import { ApiOperation, ApiSecurity, ApiTags } from '@nestjs/swagger';
import { PelanggaranRequest, PelanggaranResponse } from './dto/pelanggaran.dto';
import {
  Controller,
  Post,
  Body,
  UseGuards,
  Get,
  Param,
  Patch,
} from '@nestjs/common';

@ApiTags('Pelanggaran')
@Controller('/api/pelanggaran')
export class PelanggaranController {
  constructor(private readonly pelanggaranService: PelanggaranService) {}

  @Post()
  @ApiOperation({
    summary: 'Create Pelanggaran',
  })
  @ApiSecurity('bearer')
  @UseGuards(AuthGuard, AdminGuard)
  public async create(
    @Body() req: PelanggaranRequest,
  ): Promise<{ data: PelanggaranResponse }> {
    return this.pelanggaranService.create(req);
  }

  @Get()
  @ApiOperation({
    summary: 'Get All Data Pelanggaran',
  })
  @ApiSecurity('bearer')
  @UseGuards(AuthGuard, AdminGuard)
  public async findAll(): Promise<{ data: PelanggaranResponse[] }> {
    return this.pelanggaranService.findAll();
  }

  @Get('/:pelanggaranId')
  @ApiOperation({
    summary: 'Get Data Pelanggaran By ID',
  })
  @ApiSecurity('bearer')
  @UseGuards(AuthGuard, AdminGuard)
  public async findById(
    @Param('pelanggaranId') pelanggaranId: string,
  ): Promise<{ data: PelanggaranResponse }> {
    return this.pelanggaranService.findById(pelanggaranId);
  }

  @Patch('/:pelanggaranId')
  @ApiOperation({
    summary: 'Update Pelanggaran',
  })
  @ApiSecurity('bearer')
  @UseGuards(AuthGuard, AdminGuard)
  public async update(
    @Param('pelanggaranId') pelanggaranId: string,
    @Body() req: PelanggaranRequest,
  ): Promise<{ data: PelanggaranResponse }> {
    return this.pelanggaranService.update(pelanggaranId, req);
  }
}
