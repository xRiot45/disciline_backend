import { AuthGuard } from '../../../common/guard/auth.guard';
import { AdminGuard } from '../../../common/guard/admin.guard';
import { WebResponse } from '../../../common/dto/web.dto';
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
import { ApiOperation, ApiSecurity, ApiTags } from '@nestjs/swagger';

@ApiTags('Pendidikan')
@Controller('/api/master/pendidikan')
export class PendidikanController {
  constructor(private readonly pendidikanService: PendidikanService) {}

  @Post()
  @ApiOperation({
    summary: 'Create Pendidikan',
  })
  @ApiSecurity('bearer')
  @UseGuards(AuthGuard, AdminGuard)
  public async create(
    @Body() req: PendidikanRequest,
  ): Promise<{ data: PendidikanResponse }> {
    return this.pendidikanService.create(req);
  }

  @Get()
  @ApiOperation({
    summary: 'Get All Data Pendidikan',
  })
  @ApiSecurity('bearer')
  @UseGuards(AuthGuard)
  public async findAll(): Promise<{ data: PendidikanResponse[] }> {
    return this.pendidikanService.findAll();
  }

  @Get('/:pendidikanId')
  @ApiOperation({
    summary: 'Get Data Pendidikan By ID',
  })
  @ApiSecurity('bearer')
  @UseGuards(AuthGuard)
  public async findById(
    @Param('pendidikanId') pendidikanId: string,
  ): Promise<{ data: PendidikanResponse }> {
    return this.pendidikanService.findById(pendidikanId);
  }

  @Put('/:pendidikanId')
  @ApiOperation({
    summary: 'Update Pendidikan',
  })
  @ApiSecurity('bearer')
  @UseGuards(AuthGuard, AdminGuard)
  public async update(
    @Param('pendidikanId') pendidikanId: string,
    @Body() req: PendidikanRequest,
  ): Promise<{ data: PendidikanResponse }> {
    return this.pendidikanService.update(pendidikanId, req);
  }

  @Delete('/:pendidikanId')
  @ApiOperation({
    summary: 'Delete Pendidikan',
  })
  @ApiSecurity('bearer')
  @UseGuards(AuthGuard, AdminGuard)
  public async delete(
    @Param('pendidikanId') pendidikanId: string,
  ): Promise<WebResponse> {
    return this.pendidikanService.delete(pendidikanId);
  }
}
