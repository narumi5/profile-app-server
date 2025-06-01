import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn, Timestamp } from 'typeorm';
import { ReviewsEntity } from './reviews.entity';

@Entity('users')
export class UsersEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: 'ACTIVE' })
  status: string;

  @Column({ unique: true })
  email: string;

  @Column()
  hashedPassword: string;

  @Column()
  username: string;

  @Column()
  birthday: Date;

  @Column()
  gender: number;

  @Column()
  prefecture: string;

  @Column()
  hobbiies: string;

  @Column({ type: 'timestamp', nullable: true }) // 型を明示的に指定
  deleted_at: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }) // 型を明示的に指定
  created_at: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' }) // 型を明示的に指定
  updated_at: Date;

  @OneToMany(() => ReviewsEntity, (review) => review.user)
  reviews: ReviewsEntity[]; 
}
