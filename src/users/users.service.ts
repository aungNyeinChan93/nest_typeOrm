/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUser } from './schemas/users.zodSchema';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User) private userRepo: Repository<User>
  ) { }

  async create(createUserDto: CreateUser): Promise<User> {
    const user = await this.userRepo.save(createUserDto)
    return user;
  }

  async findAll() {
    const users = await this.userRepo.find({
      order: { id: 'DESC' }
    })
    return users;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
