import { Agama } from 'src/api/master/agama/entities/agama.entity';
import { Status } from 'src/api/master/status/entities/status.entity';
import { Jabatan } from 'src/api/master/jabatan/entities/jabatan.entity';
import { Golongan } from 'src/api/master/golongan/entities/golongan.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Kelas } from 'src/api/kelas/entities/kelas.entity';

@Entity()
export class Guru {
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
    length: 50,
    nullable: false,
  })
  nip: string;

  @ManyToOne(() => Status, (status) => status.id, { eager: true })
  @JoinColumn({ name: 'statusId' })
  statusId: Status;

  @ManyToOne(() => Jabatan, (jabatan) => jabatan.id, { eager: true })
  @JoinColumn({ name: 'jabatanId' })
  jabatanId: Jabatan;

  @ManyToOne(() => Golongan, (golongan) => golongan.id, { eager: true })
  @JoinColumn({ name: 'golonganId' })
  golonganId: Golongan;

  @ManyToOne(() => Agama, (agama) => agama.id, { eager: true })
  @JoinColumn({ name: 'agamaId' })
  agamaId: Agama;

  @Column({
    type: 'varchar',
    length: 20,
    nullable: false,
  })
  jenis_kelamin: string;

  @Column({
    type: 'varchar',
    length: 20,
    nullable: false,
  })
  no_telp: string;

  @Column({
    type: 'text',
    nullable: false,
  })
  alamat: string;

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

  @OneToOne(() => Kelas, (kelas) => kelas.id)
  kelas: Kelas;

  constructor(partial: Partial<Guru>) {
    Object.assign(this, partial);
  }
}
