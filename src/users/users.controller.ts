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
import { CreateUserDTO, UpdateUserDTO } from '../dto/user.dto';
import { UsersEntity } from '../entities/users.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createOne(@Body() dto: CreateUserDTO): Promise<UsersEntity> {
    try {
      return await this.usersService.createOne(dto);
    } catch (err) {
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get()
  async readAll(): Promise<UsersEntity[]> {
    const selected = await this.usersService.readAll();
    if (!selected) {
      throw new NotFoundException({ message: 'データがありません' });
    }
    return selected;
  }
  @Get(':id')
  async readOne(@Param('id') id: number): Promise<UsersEntity> {
    const selected = await this.usersService.readOne(id);
    if (!selected) {
      throw new NotFoundException({ message: 'データがありません' });
    }
    return selected;
  }

  @Put()
  async updateOne(@Body() dto: UpdateUserDTO): Promise<UsersEntity> {
    const selected = await this.usersService.readOne(dto.id);
    if (!selected) {
      throw new NotFoundException({ message: 'データがありません' });
    }
    try {
      return await this.usersService.updateOne(selected, dto);
    } catch (err) {
      throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Delete(':id')
  async deleteOne(@Param('id') id: number): Promise<UsersEntity> {
    const selected = await this.usersService.readOne(id);
    if (!selected) {
      throw new NotFoundException({ message: 'データがありません' });
    }
    try {
      return await this.usersService.deleteOne(selected);
    } catch (err) {
      throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
