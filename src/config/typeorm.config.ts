import { DataSource } from 'typeorm';
import { UsersEntity } from '../entities/users.entity';
import { TodosEntity } from 'src/entities/todos.entity';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'test',
  password: 'test',
  database: 'test',
  synchronize: true,
  entities: [UsersEntity,TodosEntity],
});