import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Repository } from 'typeorm';
import { CreateUserDTO, UpdateUserDTO } from '../dto/user.dto';
import { NewsEntity } from 'src/entities/news.entity';
import { CreateNewsDTO, UpdateNewsDTO } from 'src/dto/news.dto';

@Injectable()
export class NewsService {
  constructor(
    @InjectRepository(NewsEntity)
    private readonly newsRepository: Repository<NewsEntity>,
  ) {}

  async createOne(dto: CreateNewsDTO): Promise<NewsEntity> {
    return await this.newsRepository.save(dto);
  }

  async readAll(): Promise<NewsEntity[]> {
    return await this.newsRepository.find();
  }

  async readNewsOne(id: number): Promise<NewsEntity | null> {
      return await this.newsRepository.findOneBy({ id: id });
    }

  async updateNewsOne(news: NewsEntity, dto: UpdateNewsDTO): Promise<NewsEntity> {
      return await this.newsRepository.save({
        ...news,
        ...dto,
      } as DeepPartial<NewsEntity>);
    }
    
    async deleteOne(news: NewsEntity): Promise<NewsEntity> {
        return await news.remove();
      }
}
