import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(userDto: UserDto) {
    const user = new User();
    user.id = userDto.id;
    user.name = userDto.name;
    user.age = userDto.age;
    return await this.userRepository.save(user);
  }

  async findAll() {
    return await this.userRepository.find();
  }

  async findOne(id: number) {
    const user = await this.userRepository.findOneBy({ id });
    return user;
  }

  async update(id: number, userDto: UserDto) {
    const user = await this.userRepository.findOneBy({ id });
    user.id = userDto.id;
    user.name = userDto.name;
    user.age = userDto.age;
    return await this.userRepository.save(user);
  }

  async remove(id: number) {
    return await this.userRepository.delete({ id });
  }
}
