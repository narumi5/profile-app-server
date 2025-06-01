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

  @Column({ type: 'timestamp', nullable: true }) // 型を明示的に指定
  deleted_at: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }) // 型を明示的に指定
  created_at: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' }) // 型を明示的に指定
  updated_at: Date;
}
