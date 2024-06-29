import { Kelas } from 'src/api/kelas/entities/kelas.entity';
import { Agama } from 'src/api/master/agama/entities/agama.entity';
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

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  createdAt: Date;

  @ManyToOne(() => Agama, (agama) => agama.id, { eager: true })
  @JoinColumn({ name: 'agamaId' })
  agamaId: Agama;

  @ManyToOne(() => Kelas, (kelas) => kelas.id, { eager: true })
  @JoinColumn({ name: 'kelasId' })
  kelasId: Kelas;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  updatedAt: Date;

  constructor(partial: Partial<Siswa>) {
    Object.assign(this, partial);
  }
}
