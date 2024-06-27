import { AuthGuard } from 'src/common/guard/auth.guard';
import { AdminGuard } from 'src/common/guard/admin.guard';
import { AgamaService } from './agama.service';
import { AgamaRequest, AgamaResponse } from './dto/agama.dto';
import { Controller, Post, Body, UseGuards, Get, Param } from '@nestjs/common';

@Controller('/api/master/agama')
export class AgamaController {
  constructor(private readonly agamaService: AgamaService) {}

  @Post()
  @UseGuards(AdminGuard, AuthGuard)
  public async create(
    @Body() req: AgamaRequest,
  ): Promise<{ data: AgamaResponse }> {
    return this.agamaService.create(req);
  }

  @Get()
  @UseGuards(AuthGuard)
  public async findAll(): Promise<{ data: AgamaResponse[] }> {
    return this.agamaService.findAll();
  }

  @Get('/:agamaId')
  @UseGuards(AuthGuard)
  public async findById(
    @Param('agamaId') agamaId: string,
  ): Promise<{ data: AgamaResponse }> {
    return this.agamaService.findById(agamaId);
  }
}
