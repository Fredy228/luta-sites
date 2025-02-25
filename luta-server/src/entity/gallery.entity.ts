import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { GalleryTypeEnum } from '../enum/gallery-type.enum';
import { SiteEnum } from '../enum/site.enum';

@Entity('gallery')
export class Gallery {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'enum',
    enum: SiteEnum,
    nullable: false,
  })
  site: SiteEnum;

  @Column({ type: 'varchar', length: 500, nullable: false })
  path: string;

  @Column({
    type: 'enum',
    enum: GalleryTypeEnum,
    nullable: false,
  })
  type: GalleryTypeEnum;

  @Column({ type: 'varchar', length: 250, nullable: false })
  title: string;

  @Column({
    name: 'createAt',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createAt: Date;

  @Column({
    name: 'updateAt',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updateAt: Date;
}
