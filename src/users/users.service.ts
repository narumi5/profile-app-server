import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Repository } from 'typeorm';
import { CreateUserDTO, UpdateUserDTO } from '../dto/user.dto';
import { UsersEntity } from '../entities/users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersEntity)
    private readonly usersRepository: Repository<UsersEntity>,
  ) {}

  async createOne(dto: CreateUserDTO): Promise<UsersEntity> {
    return await this.usersRepository.save(dto);
  }

  async readAll(): Promise<UsersEntity[]> {
    return await this.usersRepository.find()
  }
  async readOne(id: number): Promise<UsersEntity | null> {
    return await this.usersRepository.findOneBy({ id: id });
  }

  async updateOne(user: UsersEntity, dto: UpdateUserDTO): Promise<UsersEntity> {
    console.log(user);
    console.log(dto);
    console.log({ ...user, ...dto });
    return await this.usersRepository.save({ ...user, ...dto }as DeepPartial<UsersEntity>);
    
  }

  

  async deleteOne(user: UsersEntity): Promise<UsersEntity> {
    return await user.remove();
  }
}