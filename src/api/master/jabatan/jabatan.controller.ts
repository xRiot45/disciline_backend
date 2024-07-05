import { AuthGuard } from '../../../common/guard/auth.guard';
import { AdminGuard } from '../../../common/guard/admin.guard';
import { WebResponse } from '../../../common/dto/web.dto';
import { JabatanService } from './jabatan.service';
import { JabatanRequest, JabatanResponse } from './dto/jabatan.dto';
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

@ApiTags('Jabatan')
@Controller('/api/master/jabatan')
export class JabatanController {
  constructor(private readonly jabatanService: JabatanService) {}

  @Post()
  @ApiOperation({
    summary: 'Create Jabatan',
  })
  @ApiSecurity('bearer')
  @UseGuards(AuthGuard, AdminGuard)
  public async create(
    @Body() req: JabatanRequest,
  ): Promise<{ data: JabatanResponse }> {
    return this.jabatanService.create(req);
  }

  @Get()
  @ApiOperation({
    summary: 'Get All Data Jabatan',
  })
  @ApiSecurity('bearer')
  @UseGuards(AuthGuard)
  public async findAll(): Promise<{ data: JabatanResponse[] }> {
    return this.jabatanService.findAll();
  }

  @Get('/:jabatanId')
  @ApiOperation({
    summary: 'Get Data Jabatan By ID',
  })
  @ApiSecurity('bearer')
  @UseGuards(AuthGuard)
  public async findById(
    @Param('jabatanId') jabatanId: string,
  ): Promise<{ data: JabatanResponse }> {
    return this.jabatanService.findById(jabatanId);
  }

  @Put('/:jabatanId')
  @ApiOperation({
    summary: 'Update Jabatan',
  })
  @ApiSecurity('bearer')
  @UseGuards(AuthGuard, AdminGuard)
  public async update(
    @Param('jabatanId') jabatanId: string,
    @Body() req: JabatanRequest,
  ): Promise<{ data: JabatanResponse }> {
    return this.jabatanService.update(jabatanId, req);
  }

  @Delete('/:jabatanId')
  @ApiOperation({
    summary: 'Delete Jabatan',
  })
  @ApiSecurity('bearer')
  @UseGuards(AuthGuard, AdminGuard)
  public async delete(
    @Param('jabatanId') jabatanId: string,
  ): Promise<WebResponse> {
    return this.jabatanService.delete(jabatanId);
  }
}
