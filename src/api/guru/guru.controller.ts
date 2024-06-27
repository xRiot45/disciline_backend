import { AuthGuard } from 'src/common/guard/auth.guard';
import { AdminGuard } from 'src/common/guard/admin.guard';
import { GuruService } from './guru.service';
import { GuruRequest, GuruResponse } from './dto/guru.dto';
import {
  Controller,
  Post,
  Body,
  UseGuards,
  Get,
  Param,
  Patch,
} from '@nestjs/common';

@Controller('/api/guru')
export class GuruController {
  constructor(private readonly guruService: GuruService) {}

  @Post()
  @UseGuards(AuthGuard, AdminGuard)
  public async create(
    @Body() req: GuruRequest,
  ): Promise<{ data: GuruResponse }> {
    return this.guruService.create(req);
  }

  @Get()
  @UseGuards(AuthGuard, AdminGuard)
  public async findAll(): Promise<{ data: GuruResponse[] }> {
    return this.guruService.findAll();
  }

  @Get('/:guruId')
  @UseGuards(AuthGuard, AdminGuard)
  public async findById(
    @Param('guruId') guruId: string,
  ): Promise<{ data: GuruResponse }> {
    return this.guruService.findById(guruId);
  }

  @Patch('/:guruId')
  @UseGuards(AuthGuard, AdminGuard)
  public async update(
    @Param('guruId') guruId: string,
    @Body() req: GuruRequest,
  ): Promise<{ data: GuruResponse }> {
    return this.guruService.update(guruId, req);
  }
}
