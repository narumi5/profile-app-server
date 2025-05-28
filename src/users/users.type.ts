import { UsersEntity } from '../entities/users.entity';

export type PasswordOmitUser = Omit<UsersEntity, 'hashedPassword'>;