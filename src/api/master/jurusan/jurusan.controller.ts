import { AuthGuard } from '../../../common/guard/auth.guard';
import { AdminGuard } from '../../../common/guard/admin.guard';
import { WebResponse } from '../../../common/dto/web.dto';
import { JurusanService } from './jurusan.service';
import { JurusanRequest, JurusanResponse } from './dto/jurusan.dto';
import { ApiOperation, ApiSecurity, ApiTags } from '@nestjs/swagger';
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

@ApiTags('Jurusan')
@Controller('/api/master/jurusan')
export class JurusanController {
  constructor(private readonly jurusanService: JurusanService) {}

  @Post()
  @ApiOperation({
    summary: 'Create Jurusan',
  })
  @ApiSecurity('bearer')
  @UseGuards(AuthGuard, AdminGuard)
  public async create(
    @Body() req: JurusanRequest,
  ): Promise<{ data: JurusanResponse }> {
    return this.jurusanService.create(req);
  }

  @Get()
  @ApiOperation({
    summary: 'Get All Data Jurusan',
  })
  @ApiSecurity('bearer')
  @UseGuards(AuthGuard)
  public async findAll(): Promise<{ data: JurusanResponse[] }> {
    return this.jurusanService.findAll();
  }

  @Get('/:jurusanId')
  @ApiOperation({
    summary: 'Get Data Jurusan By ID',
  })
  @ApiSecurity('bearer')
  @UseGuards(AuthGuard)
  public async findById(
    @Param('jurusanId') jurusanId: string,
  ): Promise<{ data: JurusanResponse }> {
    return this.jurusanService.findById(jurusanId);
  }

  @Put('/:jurusanId')
  @ApiOperation({
    summary: 'Update Jurusan',
  })
  @ApiSecurity('bearer')
  @UseGuards(AuthGuard, AdminGuard)
  public async update(
    @Param('jurusanId') jurusanId: string,
    @Body() req: JurusanRequest,
  ): Promise<{ data: JurusanResponse }> {
    return this.jurusanService.update(jurusanId, req);
  }

  @Delete('/:jurusanId')
  @ApiOperation({
    summary: 'Delete Jurusan',
  })
  @ApiSecurity('bearer')
  @UseGuards(AuthGuard, AdminGuard)
  public async delete(
    @Param('jurusanId') jurusanId: string,
  ): Promise<WebResponse> {
    return this.jurusanService.delete(jurusanId);
  }
}
