import { Kelas } from '../../../api/kelas/entities/kelas.entity';
import { Agama } from '../../../api/master/agama/entities/agama.entity';
import { Pelanggaran } from '../../../api/pelanggaran/entities/pelanggaran.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Siswa {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
    length: 50,
    nullable: false,
  })
  nama_lengkap: string;

  @Column({
    type: 'varchar',
    length: 20,
    nullable: false,
  })
  nis: string;

  @Column({
    type: 'varchar',
    length: 20,
    nullable: false,
  })
  nisn: string;

  @Column({
    type: 'varchar',
    length: 50,
    nullable: false,
  })
  tanggal_lahir: string;

  @Column({
    type: 'varchar',
    length: 100,
    nullable: false,
  })
  tempat_lahir: string;

  @Column({
    type: 'varchar',
    length: 20,
    nullable: false,
  })
  jenis_kelamin: string;

  @Column({
    type: 'varchar',
    length: 50,
    nullable: false,
  })
  nama_wali: string;

  @Column({
    type: 'varchar',
    length: 20,
    nullable: false,
  })
  no_telp_wali: string;

  @Column({
    type: 'text',
    nullable: false,
  })
  alamat: string;

  @ManyToOne(() => Agama, (agama) => agama.id, { eager: true })
  @JoinColumn({ name: 'agamaId' })
  agamaId: Agama;

  @ManyToOne(() => Kelas, (kelas) => kelas.id, { eager: true })
  @JoinColumn({ name: 'kelasId' })
  kelasId: Kelas;

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

  @OneToMany(() => Pelanggaran, (pelanggaran) => pelanggaran.siswaId)
  pelanggaran: Pelanggaran[];

  constructor(partial: Partial<Siswa>) {
    Object.assign(this, partial);
  }
}
