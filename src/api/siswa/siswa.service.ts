import { Kelas } from '../kelas/entities/kelas.entity';
import { Siswa } from './entities/siswa.entity';
import { Agama } from '../master/agama/entities/agama.entity';
import { EntityManager } from 'typeorm';
import { SiswaValidation } from './siswa.validation';
import { ValidationService } from 'src/common/validation/validation.service';
import { SiswaRequest, SiswaResponse } from './dto/siswa.dto';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class SiswaService {
  constructor(
    private readonly entityManager: EntityManager,
    private validationService: ValidationService,
  ) {}

  public async create(req: SiswaRequest): Promise<{ data: SiswaResponse }> {
    const createRequest = this.validationService.validate(
      SiswaValidation.CREATE,
      req,
    );

    // Check siswa in database
    const siswaExists = await this.entityManager.findOne(Siswa, {
      where: {
        nama_lengkap: createRequest.nama_lengkap,
      },
    });

    if (siswaExists) {
      throw new HttpException('Siswa already exists', HttpStatus.CONFLICT);
    }

    const [agama, kelas] = await Promise.all([
      this.entityManager.findOne(Agama, {
        where: {
          id: createRequest.agamaId,
        },
      }),

      this.entityManager.findOne(Kelas, {
        where: {
          id: createRequest.kelasId,
        },
      }),
    ]);

    if (!agama) {
      throw new HttpException('Agama not found', HttpStatus.NOT_FOUND);
    }

    if (!kelas) {
      throw new HttpException('Kelas not found', HttpStatus.NOT_FOUND);
    }

    const data = {
      ...createRequest,
      agamaId: agama,
      kelasId: kelas,
    };

    const siswa = new Siswa(data);
    await this.entityManager.save(siswa);

    return {
      data: {
        id: siswa.id,
        nama_lengkap: siswa.nama_lengkap,
        nis: siswa.nis,
        nisn: siswa.nisn,
        tanggal_lahir: siswa.tanggal_lahir,
        tempat_lahir: siswa.tempat_lahir,
        jenis_kelamin: siswa.jenis_kelamin,
        kelas: {
          nama_kelas: kelas ? kelas.nama_kelas : null,
          jurusan: {
            nama_jurusan: kelas ? kelas.jurusanId.nama_jurusan : null,
          },
          guru: {
            nama_lengkap: kelas ? kelas.guruId.nama_lengkap : null,
          },
        },

        agama: {
          nama_agama: agama ? agama.nama_agama : null,
        },

        nama_wali: siswa.nama_wali,
        no_telp_wali: siswa.no_telp_wali,
        alamat: siswa.alamat,
      },
    };
  }
}
