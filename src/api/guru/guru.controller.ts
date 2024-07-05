import { AuthGuard } from '../../common/guard/auth.guard';
import { AdminGuard } from '../../common/guard/admin.guard';
import { GuruService } from './guru.service';
import { WebResponse } from '../../common/dto/web.dto';
import { GuruRequest, GuruResponse } from './dto/guru.dto';
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
import { ApiOperation, ApiSecurity, ApiTags } from '@nestjs/swagger';

@ApiTags('Guru')
@Controller('/api/guru')
export class GuruController {
  constructor(private readonly guruService: GuruService) {}

  @Post()
  @ApiOperation({
    summary: 'Create Guru',
  })
  @ApiSecurity('bearer')
  @UseGuards(AuthGuard, AdminGuard)
  public async create(
    @Body() req: GuruRequest,
  ): Promise<{ data: GuruResponse }> {
    return this.guruService.create(req);
  }

  @Get()
  @ApiOperation({
    summary: 'Get All Data Guru',
  })
  @ApiSecurity('bearer')
  @UseGuards(AuthGuard, AdminGuard)
  public async findAll(): Promise<{ data: GuruResponse[] }> {
    return this.guruService.findAll();
  }

  @Get('/:guruId')
  @ApiOperation({
    summary: 'Get Data Guru By ID',
  })
  @ApiSecurity('bearer')
  @UseGuards(AuthGuard, AdminGuard)
  public async findById(
    @Param('guruId') guruId: string,
  ): Promise<{ data: GuruResponse }> {
    return this.guruService.findById(guruId);
  }

  @Patch('/:guruId')
  @ApiOperation({
    summary: 'Update Guru',
  })
  @ApiSecurity('bearer')
  @UseGuards(AuthGuard, AdminGuard)
  public async update(
    @Param('guruId') guruId: string,
    @Body() req: GuruRequest,
  ): Promise<{ data: GuruResponse }> {
    return this.guruService.update(guruId, req);
  }

  @Delete('/:guruId')
  @ApiOperation({
    summary: 'Delete Guru',
  })
  @ApiSecurity('bearer')
  @UseGuards(AuthGuard, AdminGuard)
  public async delete(@Param('guruId') guruId: string): Promise<WebResponse> {
    return this.guruService.delete(guruId);
  }
}
