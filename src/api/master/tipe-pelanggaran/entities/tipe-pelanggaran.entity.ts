import { Pelanggaran } from '../../../../api/pelanggaran/entities/pelanggaran.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class TipePelanggaran {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
    length: 50,
    nullable: false,
  })
  nama_tipe_pelanggaran: string;

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

  @OneToMany(() => Pelanggaran, (pelanggaran) => pelanggaran.tipePelanggaranId)
  pelanggaran: Pelanggaran[];

  constructor(partial: Partial<TipePelanggaran>) {
    Object.assign(this, partial);
  }
}
