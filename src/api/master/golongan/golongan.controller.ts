import { AuthGuard } from 'src/common/guard/auth.guard';
import { AdminGuard } from 'src/common/guard/admin.guard';
import { WebResponse } from 'src/common/dto/web.dto';
import { GolonganService } from './golongan.service';
import { GolonganRequest, GolonganResponse } from './dto/golongan.dto';
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

@Controller('/api/master/golongan')
export class GolonganController {
  constructor(private readonly golonganService: GolonganService) {}

  @Post()
  @UseGuards(AuthGuard, AdminGuard)
  public async create(
    @Body() req: GolonganRequest,
  ): Promise<{ data: GolonganResponse }> {
    return this.golonganService.create(req);
  }

  @Get()
  @UseGuards(AuthGuard, AdminGuard)
  public async findAll(): Promise<{ data: GolonganResponse[] }> {
    return this.golonganService.findAll();
  }

  @Get('/:golonganId')
  @UseGuards(AuthGuard, AdminGuard)
  public async findById(
    @Param('golonganId') golonganId: string,
  ): Promise<{ data: GolonganResponse }> {
    return this.golonganService.findById(golonganId);
  }

  @Put('/:golonganId')
  @UseGuards(AuthGuard, AdminGuard)
  public async update(
    @Param('golonganId') golonganId: string,
    @Body() req: GolonganRequest,
  ): Promise<{ data: GolonganResponse }> {
    return this.golonganService.update(golonganId, req);
  }

  @Delete('/:golonganId')
  @UseGuards(AuthGuard, AdminGuard)
  public async delete(
    @Param('golonganId') golonganId: string,
  ): Promise<WebResponse> {
    return this.golonganService.delete(golonganId);
  }
}
