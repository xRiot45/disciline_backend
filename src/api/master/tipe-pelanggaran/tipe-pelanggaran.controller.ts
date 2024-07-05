import { AuthGuard } from '../../../common/guard/auth.guard';
import { AdminGuard } from '../../../common/guard/admin.guard';
import { WebResponse } from '../../../common/dto/web.dto';
import { TipePelanggaranService } from './tipe-pelanggaran.service';
import { ApiOperation, ApiSecurity, ApiTags } from '@nestjs/swagger';
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

@ApiTags('Tipe Pelanggaran')
@Controller('/api/master/tipe-pelanggaran')
export class TipePelanggaranController {
  constructor(
    private readonly tipePelanggaranService: TipePelanggaranService,
  ) {}

  @Post()
  @ApiOperation({
    summary: 'Create Tipe Pelanggaran',
  })
  @ApiSecurity('bearer')
  @UseGuards(AdminGuard, AuthGuard)
  public async create(
    @Body() req: TipePelanggaranRequest,
  ): Promise<{ data: TipePelanggaranResponse }> {
    return this.tipePelanggaranService.create(req);
  }

  @Get()
  @ApiOperation({
    summary: 'Get All Data Tipe Pelanggaran',
  })
  @ApiSecurity('bearer')
  @UseGuards(AuthGuard)
  public async findAll(): Promise<{ data: TipePelanggaranResponse[] }> {
    return this.tipePelanggaranService.findAll();
  }

  @Get('/:tipePelanggaranId')
  @ApiOperation({
    summary: 'Get Data Tipe Pelanggaran By ID',
  })
  @ApiSecurity('bearer')
  @UseGuards(AuthGuard)
  public async findById(
    @Param('tipePelanggaranId') tipePelanggaranId: string,
  ): Promise<{ data: TipePelanggaranResponse }> {
    return this.tipePelanggaranService.findById(tipePelanggaranId);
  }

  @Put('/:tipePelanggaranId')
  @ApiOperation({
    summary: 'Update Tipe Pelanggaran',
  })
  @ApiSecurity('bearer')
  @UseGuards(AdminGuard, AuthGuard)
  public async update(
    @Param('tipePelanggaranId') tipePelanggaranId: string,
    @Body() req: TipePelanggaranRequest,
  ): Promise<{ data: TipePelanggaranResponse }> {
    return this.tipePelanggaranService.update(tipePelanggaranId, req);
  }

  @Delete('/:tipePelanggaranId')
  @ApiOperation({
    summary: 'Delete Tipe Pelanggaran',
  })
  @ApiSecurity('bearer')
  @UseGuards(AdminGuard, AuthGuard)
  public async delete(
    @Param('tipePelanggaranId') tipePelanggaranId: string,
  ): Promise<WebResponse> {
    return this.tipePelanggaranService.delete(tipePelanggaranId);
  }
}
