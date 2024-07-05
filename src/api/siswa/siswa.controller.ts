import { AuthGuard } from '../../common/guard/auth.guard';
import { AdminGuard } from '../../common/guard/admin.guard';
import { WebResponse } from '../../common/dto/web.dto';
import { SiswaService } from './siswa.service';
import { SiswaRequest, SiswaResponse } from './dto/siswa.dto';
import { ApiOperation, ApiSecurity, ApiTags } from '@nestjs/swagger';
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

@ApiTags('Siswa')
@Controller('/api/siswa')
export class SiswaController {
  constructor(private readonly siswaService: SiswaService) {}

  @Post()
  @ApiOperation({
    summary: 'Create Siswa',
  })
  @ApiSecurity('bearer')
  @UseGuards(AuthGuard, AdminGuard)
  public async create(
    @Body() req: SiswaRequest,
  ): Promise<{ data: SiswaResponse }> {
    return this.siswaService.create(req);
  }

  @Get()
  @ApiOperation({
    summary: 'Get All Data Siswa',
  })
  @ApiSecurity('bearer')
  @UseGuards(AuthGuard, AdminGuard)
  public async findAll(): Promise<{ data: SiswaResponse[] }> {
    return this.siswaService.findAll();
  }

  @Get('/:siswaId')
  @ApiOperation({
    summary: 'Get Data Siswa By ID',
  })
  @ApiSecurity('bearer')
  @UseGuards(AuthGuard, AdminGuard)
  public async findById(
    @Param('siswaId') siswaId: string,
  ): Promise<{ data: SiswaResponse }> {
    return this.siswaService.findById(siswaId);
  }

  @Patch('/:siswaId')
  @ApiOperation({
    summary: 'Update Data Siswa',
  })
  @ApiSecurity('bearer')
  @UseGuards(AuthGuard, AdminGuard)
  public async update(
    @Param('siswaId') siswaId: string,
    @Body() req: SiswaRequest,
  ): Promise<{ data: SiswaResponse }> {
    return this.siswaService.update(siswaId, req);
  }

  @Delete('/:siswaId')
  @ApiOperation({
    summary: 'Delete Data Siswa',
  })
  @ApiSecurity('bearer')
  @UseGuards(AuthGuard, AdminGuard)
  public async delete(@Param('siswaId') siswaId: string): Promise<WebResponse> {
    return this.siswaService.delete(siswaId);
  }
}
