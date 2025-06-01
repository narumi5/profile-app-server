import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, Timestamp } from 'typeorm';

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

  @Column()
  deleted_at: Timestamp;

  @Column()
  created_at: Timestamp;

  @Column()
  updated_at: Timestamp;
}
