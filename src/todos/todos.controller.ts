import { Body, Controller, Get, HttpException, HttpStatus, NotFoundException, Post } from '@nestjs/common';
import { TodosService } from './todos.service';
import { CreateTodoDTO } from 'src/dto/todos.dto';
import { TodosEntity } from 'src/entities/todos.entity';
import { UsersService } from 'src/users/users.service';

@Controller('todos')
export class TodosController {
    
   constructor(private readonly todosService: TodosService) {}

   @Post()
     async createOne(@Body() dto: CreateTodoDTO): Promise<TodosEntity> {
        console.log(dto);
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
}
