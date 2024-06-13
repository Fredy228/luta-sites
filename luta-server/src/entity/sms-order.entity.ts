import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { FileType } from '../types/sms_message.type';
import { JsonTransformer } from '@anchan828/typeorm-transformers';
import { SiteEnum } from '../enum/site.enum';

@Entity('sms_order')
export class SmsOrder {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 250, nullable: false })
  email: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  name: string;

  @Column({ type: 'varchar', length: 50, nullable: false })
  phone: string;

  @Column({ type: 'varchar', length: 500, nullable: true })
  message: string;

  @Column({
    type: 'longtext',
    nullable: true,
    transformer: new JsonTransformer<FileType>(null),
  })
  file: FileType;

  @Column({
    type: 'enum',
    enum: SiteEnum,
    nullable: false,
  })
  site: SiteEnum;

  @Column({
    name: 'createAt',
    type: 'date',
    default: () => 'CURRENT_DATE',
  })
  createAt: Date;

  @Column({
    name: 'create_row',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createRow: Date;
}
