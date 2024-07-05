import { AuthGuard } from '../../../common/guard/auth.guard';
import { AdminGuard } from '../../../common/guard/admin.guard';
import { WebResponse } from '../../../common/dto/web.dto';
import { GolonganService } from './golongan.service';
import { GolonganRequest, GolonganResponse } from './dto/golongan.dto';
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

@ApiTags('Golongan')
@Controller('/api/master/golongan')
export class GolonganController {
  constructor(private readonly golonganService: GolonganService) {}

  @Post()
  @ApiOperation({
    summary: 'Create Golongan',
  })
  @ApiSecurity('bearer')
  @UseGuards(AuthGuard, AdminGuard)
  public async create(
    @Body() req: GolonganRequest,
  ): Promise<{ data: GolonganResponse }> {
    return this.golonganService.create(req);
  }

  @Get()
  @ApiOperation({
    summary: 'Get All Data Golongan',
  })
  @ApiSecurity('bearer')
  @UseGuards(AuthGuard)
  public async findAll(): Promise<{ data: GolonganResponse[] }> {
    return this.golonganService.findAll();
  }

  @Get('/:golonganId')
  @ApiOperation({
    summary: 'Get Data Golongan By ID',
  })
  @ApiSecurity('bearer')
  @UseGuards(AuthGuard)
  public async findById(
    @Param('golonganId') golonganId: string,
  ): Promise<{ data: GolonganResponse }> {
    return this.golonganService.findById(golonganId);
  }

  @Put('/:golonganId')
  @ApiOperation({
    summary: 'Update Golongan',
  })
  @ApiSecurity('bearer')
  @UseGuards(AuthGuard, AdminGuard)
  public async update(
    @Param('golonganId') golonganId: string,
    @Body() req: GolonganRequest,
  ): Promise<{ data: GolonganResponse }> {
    return this.golonganService.update(golonganId, req);
  }

  @Delete('/:golonganId')
  @ApiOperation({
    summary: 'Delete Golongan',
  })
  @ApiSecurity('bearer')
  @UseGuards(AuthGuard, AdminGuard)
  public async delete(
    @Param('golonganId') golonganId: string,
  ): Promise<WebResponse> {
    return this.golonganService.delete(golonganId);
  }
}
