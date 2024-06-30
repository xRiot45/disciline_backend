import { PelanggaranService } from './pelanggaran.service';
import { PelanggaranRequest } from './dto/Pelanggaran.dto';
import { Controller, Post, Body } from '@nestjs/common';

@Controller('pelanggaran')
export class PelanggaranController {
  constructor(private readonly pelanggaranService: PelanggaranService) {}

  @Post()
  create(@Body() req: PelanggaranRequest) {
    return this.pelanggaranService.create(req);
  }
}
