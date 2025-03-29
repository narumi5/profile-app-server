import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Repository } from 'typeorm';
import { CreateUserDTO, UpdateUserDTO } from '../dto/user.dto';
import { TodosEntity } from '../entities/todos.entity';
import { CreateTodoDTO, UpdateTodoDTO } from 'src/dto/todos.dto';
import { UsersEntity } from 'src/entities/users.entity';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(TodosEntity)
    private readonly todosRepository: Repository<TodosEntity>,

    @InjectRepository(UsersEntity)
    private readonly usersRepository: Repository<UsersEntity>,
  ) {}

  async createOne(dto: CreateTodoDTO): Promise<TodosEntity> {
    return await this.todosRepository.save(dto);
  }

  async readAll(): Promise<TodosEntity[]> {
    return await this.todosRepository.find();
  }

  async readOne(id: number): Promise<TodosEntity | null> {
    return await this.todosRepository.findOneBy({ id: id });
  }

  async readTitleOne(title: string): Promise<TodosEntity | null> {
    return await this.todosRepository.findOneBy({ title: title });
  }

  async updateOne(todo: TodosEntity, dto: UpdateTodoDTO): Promise<TodosEntity> {
    return await this.todosRepository.save({
      ...todo,
      ...dto,
    } as DeepPartial<TodosEntity>);
  }

  async deleteOne(todo: TodosEntity): Promise<TodosEntity> {
    return await todo.remove();
  }
}
