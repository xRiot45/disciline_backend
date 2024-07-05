import { Kelas } from '../../../../api/kelas/entities/kelas.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Jurusan {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
    length: 25,
    nullable: false,
  })
  nama_jurusan: string;

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

  @OneToMany(() => Kelas, (kelas) => kelas.jurusanId)
  kelas: Kelas[];

  constructor(partial: Partial<Jurusan>) {
    Object.assign(this, partial);
  }
}
