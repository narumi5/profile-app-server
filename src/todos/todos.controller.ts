import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TodosService } from './todos.service';
import { CreateTodoDTO, DeleteTodoDTO, UpdateTodoDTO } from 'src/dto/todos.dto';
import { TodosEntity } from 'src/entities/todos.entity';
import { UsersService } from 'src/users/users.service';
import { title } from 'process';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Post()
  async createOne(@Body() dto: CreateTodoDTO): Promise<TodosEntity> {
    try {
      return await this.todosService.createOne(dto);
    } catch (err) {
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get()
  async readAll(): Promise<TodosEntity[]> {
    const selected = await this.todosService.readAll();
    if (!selected) {
      throw new NotFoundException({ message: 'データがありません' });
    }
    return selected;
  }

  @Get(':id')
  async readOne(@Param('id') id: number): Promise<TodosEntity> {
    const selected = await this.todosService.readOne(id);
    if (!selected) {
      throw new NotFoundException({ message: 'データがありません' });
    }
    return selected;
  }

  @Get('B/:title/:C')
  async readTitleOne(
    @Param('title') A: string,
    @Param('C') D: string,
  ): Promise<TodosEntity> {
    const selected = await this.todosService.readTitleOne(D);
    if (!selected) {
      throw new NotFoundException({ message: 'データがありません' });
    }
    return selected;
  }

  @Put()
  async updateOne(@Body() dto: UpdateTodoDTO): Promise<TodosEntity> {
    const selected = await this.todosService.readOne(dto.id);
    if (!selected) {
      throw new NotFoundException({ message: 'データがありません' });
    }
    try {
      return await this.todosService.updateOne(selected, dto);
    } catch (err) {
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  
  @Delete('delete')
  async deleteOneByBody(@Body() dto: DeleteTodoDTO): Promise<TodosEntity> {
    const selected = await this.todosService.readOne(dto.id);
    if (!selected) {
      throw new NotFoundException({ message: 'データがありません' });
    }
    try {
      return await this.todosService.deleteOne(selected);
    } catch (err) {
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Delete(':id')
  async deleteOne(@Param('id') id: number): Promise<TodosEntity> {
    const selected = await this.todosService.readOne(id);
    if (!selected) {
      throw new NotFoundException({ message: 'データがありません' });
    }
    try {
      return await this.todosService.deleteOne(selected);
    } catch (err) {
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

}
