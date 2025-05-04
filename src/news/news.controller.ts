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
import { NewsService } from './news.service';
import { CreateTodoDTO, DeleteTodoDTO, UpdateTodoDTO } from 'src/dto/todos.dto';
import { TodosEntity } from 'src/entities/todos.entity';
import { UsersService } from 'src/users/users.service';
import { title } from 'process';
import { CreateNewsDTO, DeleteNewsDTO, UpdateNewsDTO } from 'src/dto/news.dto';
import { NewsEntity } from 'src/entities/news.entity';

@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Post()
  async createOne(@Body() dto: CreateNewsDTO): Promise<NewsEntity> {
    try {
      return await this.newsService.createOne(dto);
    } catch (err) {
      console.log(err);
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get()
  async readAll(): Promise<NewsEntity[]> {
    const selected = await this.newsService.readAll();
    if (!selected) {
      throw new NotFoundException({ message: 'データがありません' });
    }
    return selected;
  }

  @Get(':id')
  async readNewsOne(@Param('id') id: number): Promise<NewsEntity> {
    const selected = await this.newsService.readNewsOne(id);
    if (!selected) {
      throw new NotFoundException({ message: 'データがありません' });
    }
    return selected;
  }

  @Put()
  async updateNewsOne(@Body() dto: UpdateNewsDTO): Promise<NewsEntity> {
    const selected = await this.newsService.readNewsOne(dto.id);
    if (!selected) {
      throw new NotFoundException({ message: 'データがありません' });
    }
    try {
      return await this.newsService.updateNewsOne(selected, dto);
    } catch (err) {
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Delete('delete')
  async deleteOneByBody(@Body() dto: DeleteNewsDTO): Promise<NewsEntity> {
    const selected = await this.newsService.readNewsOne(dto.id);
    if (!selected) {
      throw new NotFoundException({ message: 'データがありません' });
    }
    try {
      return await this.newsService.deleteOne(selected);
    } catch (err) {
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
