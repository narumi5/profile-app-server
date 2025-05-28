import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity("users")
export class UsersEntity extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  firstName: string;

  @Column({ nullable: true })
  lastName: string;

  @Column({ default: true })
  isActive: boolean;

  @Column({ nullable: true })
  age: number;

  @Column({ unique: true })
  email: string

  @Column()
  hashedPassword: string
}
