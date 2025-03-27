import { Module } from '@nestjs/common';
import { TodosController } from './todos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodosEntity } from 'src/entities/todos.entity';
import { TodosService } from './todos.service';
import { UsersEntity } from 'src/entities/users.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TodosEntity,UsersEntity])],
  controllers: [TodosController],
  providers: [TodosService],
})
export class TodoModule {}
