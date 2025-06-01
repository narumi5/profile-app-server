import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  Timestamp,
} from 'typeorm';

@Entity('posts')
export class PostsEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: 'ACTIVE' })
  status: string;
  
  @Column()
  content: string;

  @Column()
  deleted_at: Timestamp;

  @Column()
  created_at: Timestamp;

  @Column()
  updated_at: Timestamp;
}
