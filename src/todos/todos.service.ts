import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Repository } from 'typeorm';
import { CreateUserDTO, UpdateUserDTO } from '../dto/user.dto';
import { TodosEntity } from '../entities/todos.entity';
import { CreateTodoDTO } from 'src/dto/todos.dto';
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
    const response = await this.usersRepository.find()
    const total = 1+1
    console.log(response);
    console.log(dto);
    return await this.todosRepository.save(dto);
    
}

async readAll(): Promise<TodosEntity[]> {
    return await this.todosRepository.find()
  }
}

