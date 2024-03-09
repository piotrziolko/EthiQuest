import { Injectable } from '@nestjs/common';
import { User } from '../sql/entities/user.entity';
import { EntityManager } from '@mikro-orm/postgresql';

@Injectable()
export class UsersService {
  constructor(private readonly entityManager: EntityManager) {}
  async findOne(username: string): Promise<User | undefined> {
    return this.entityManager.findOne(User, { name: username });
  }

  async create(username: string, password: string): Promise<User> {
    const user = new User(username, password);
    await this.entityManager.persistAndFlush(user);
    return user;
  }
}
