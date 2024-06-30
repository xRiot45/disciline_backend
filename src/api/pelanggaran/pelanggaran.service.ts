import { Injectable } from '@nestjs/common';
import { PelanggaranRequest } from './dto/Pelanggaran.dto';

@Injectable()
export class PelanggaranService {
  public async create(req: PelanggaranRequest) {
    return 'This action adds a new pelanggaran';
  }
}
