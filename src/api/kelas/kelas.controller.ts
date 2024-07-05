import { AuthGuard } from '../../common/guard/auth.guard';
import { AdminGuard } from '../../common/guard/admin.guard';
import { KelasService } from './kelas.service';
import { KelasRequest, KelasResponse } from './dto/kelas.dto';
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

@ApiTags('Kelas')
@Controller('/api/kelas')
export class KelasController {
  constructor(private readonly kelasService: KelasService) {}

  @Post()
  @ApiOperation({
    summary: 'Create Kelas',
  })
  @ApiSecurity('bearer')
  @UseGuards(AuthGuard, AdminGuard)
  public async create(
    @Body() req: KelasRequest,
  ): Promise<{ data: KelasResponse }> {
    return this.kelasService.create(req);
  }

  @Get()
  @ApiOperation({
    summary: 'Get All Data Kelas',
  })
  @ApiSecurity('bearer')
  @UseGuards(AuthGuard, AdminGuard)
  public async findAll(): Promise<{ data: KelasResponse[] }> {
    return this.kelasService.findAll();
  }

  @Get('/:kelasId')
  @ApiOperation({
    summary: 'Get Data Kelas By ID',
  })
  @ApiSecurity('bearer')
  @UseGuards(AuthGuard, AdminGuard)
  public async findById(
    @Param('kelasId') kelasId: string,
  ): Promise<{ data: KelasResponse }> {
    return this.kelasService.findById(kelasId);
  }

  @Patch('/:kelasId')
  @ApiOperation({
    summary: 'Update Kelas',
  })
  @ApiSecurity('bearer')
  @UseGuards(AuthGuard, AdminGuard)
  public async update(
    @Param('kelasId') kelasId: string,
    @Body() req: KelasRequest,
  ): Promise<{ data: KelasResponse }> {
    return this.kelasService.update(kelasId, req);
  }

  @Delete('/:kelasId')
  @ApiOperation({
    summary: 'Delete Kelas',
  })
  @ApiSecurity('bearer')
  @UseGuards(AuthGuard, AdminGuard)
  public async delete(
    @Param('kelasId') kelasId: string,
  ): Promise<{ message: string }> {
    return this.kelasService.delete(kelasId);
  }
}
