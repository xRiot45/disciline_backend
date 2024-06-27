import { AuthGuard } from 'src/common/guard/auth.guard';
import { AdminGuard } from 'src/common/guard/admin.guard';
import { WebResponse } from 'src/common/dto/web.dto';
import { JabatanService } from './jabatan.service';
import { JabatanRequest, JabatanResponse } from './dto/jabatan.dto';
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

@Controller('/api/master/jabatan')
export class JabatanController {
  constructor(private readonly jabatanService: JabatanService) {}

  @Post()
  @UseGuards(AuthGuard, AdminGuard)
  public async create(
    @Body() req: JabatanRequest,
  ): Promise<{ data: JabatanResponse }> {
    return this.jabatanService.create(req);
  }

  @Get()
  @UseGuards(AuthGuard, AdminGuard)
  public async findAll(): Promise<{ data: JabatanResponse[] }> {
    return this.jabatanService.findAll();
  }

  @Get('/:jabatanId')
  @UseGuards(AuthGuard, AdminGuard)
  public async findById(
    @Param('jabatanId') jabatanId: string,
  ): Promise<{ data: JabatanResponse }> {
    return this.jabatanService.findById(jabatanId);
  }

  @Put('/:jabatanId')
  @UseGuards(AuthGuard, AdminGuard)
  public async update(
    @Param('jabatanId') jabatanId: string,
    @Body() req: JabatanRequest,
  ): Promise<{ data: JabatanResponse }> {
    return this.jabatanService.update(jabatanId, req);
  }

  @Delete('/:jabatanId')
  @UseGuards(AuthGuard, AdminGuard)
  public async delete(
    @Param('jabatanId') jabatanId: string,
  ): Promise<WebResponse> {
    return this.jabatanService.delete(jabatanId);
  }
}
