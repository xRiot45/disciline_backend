import { Siswa } from '../../../api/siswa/entities/siswa.entity';
import { TipePelanggaran } from '../../../api/master/tipe-pelanggaran/entities/tipe-pelanggaran.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Pelanggaran {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => TipePelanggaran, (tipePelanggaran) => tipePelanggaran.id, {
    eager: true,
  })
  @JoinColumn({ name: 'tipePelanggaranId' })
  tipePelanggaranId: TipePelanggaran;

  @ManyToOne(() => Siswa, (siswa) => siswa.id, { eager: true })
  @JoinColumn({ name: 'siswaId' })
  siswaId: Siswa;

  @Column({
    type: 'text',
    nullable: true,
  })
  keterangan: string;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  updatedAt: Date;

  constructor(partial: Partial<Pelanggaran>) {
    Object.assign(this, partial);
  }
}
