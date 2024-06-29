import { Injectable } from '@nestjs/common';
import { SiswaRequest, SiswaResponse } from './dto/siswa.dto';

@Injectable()
export class SiswaService {
  public async create(req: SiswaRequest): Promise<{ data: SiswaResponse }> {
    return 'This action adds a new siswa';
  }
}
