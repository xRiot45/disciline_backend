import { Guru } from '../../../api/guru/entities/guru.entity';
import { Siswa } from '../../../api/siswa/entities/siswa.entity';
import { Jurusan } from '../../../api/master/jurusan/entities/jurusan.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Kelas {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
    length: 25,
    nullable: false,
  })
  nama_kelas: string;

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

  @ManyToOne(() => Jurusan, (jurusan) => jurusan.id, { eager: true })
  @JoinColumn({ name: 'jurusanId' })
  jurusanId: Jurusan;

  @OneToOne(() => Guru, (guru) => guru.id, { eager: true })
  @JoinColumn({ name: 'guruId' })
  guruId: Guru;

  @OneToMany(() => Siswa, (siswa) => siswa.kelasId)
  siswa: Siswa[];

  constructor(partial: Partial<Kelas>) {
    Object.assign(this, partial);
  }
}
