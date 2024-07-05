import { Guru } from '../../../../api/guru/entities/guru.entity';
import { Siswa } from '../../../../api/siswa/entities/siswa.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Agama {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
    length: 25,
    nullable: false,
  })
  nama_agama: string;

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

  @OneToMany(() => Guru, (guru) => guru.jabatanId)
  guru: Guru[];

  @OneToMany(() => Siswa, (siswa) => siswa.agamaId)
  siswa: Siswa[];

  constructor(partial: Partial<Agama>) {
    Object.assign(this, partial);
  }
}
