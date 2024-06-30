import { Siswa } from 'src/api/siswa/entities/siswa.entity';
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

  @ManyToOne(() => Pelanggaran, (pelanggaran) => pelanggaran.id, {
    eager: true,
  })
  @JoinColumn({ name: 'tipePelanggaranId' })
  tipePelanggaranId: Pelanggaran;

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
