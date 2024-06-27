import { AuthGuard } from 'src/common/guard/auth.guard';
import { AdminGuard } from 'src/common/guard/admin.guard';
import { AgamaService } from './agama.service';
import { AgamaRequest, AgamaResponse } from './dto/agama.dto';
import { Controller, Post, Body, UseGuards } from '@nestjs/common';

@Controller('/api/master/agama')
export class AgamaController {
  constructor(private readonly agamaService: AgamaService) {}

  @Post()
  @UseGuards(AdminGuard, AuthGuard)
  create(@Body() req: AgamaRequest): Promise<{ data: AgamaResponse }> {
    return this.agamaService.create(req);
  }
}
