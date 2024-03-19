import { Injectable } from '@nestjs/common';
import { User } from '../../sql/entities/user.entity';
import { EntityManager } from '@mikro-orm/postgresql';

@Injectable()
export class UsersService {
  constructor(private readonly entityManager: EntityManager) {}
  async findOneByUsername(username: string): Promise<User | undefined> {
    return this.entityManager.findOne(User, { name: { $ilike: username } });
  }

  async findOneByEmailAddress(email: string): Promise<User | undefined> {
    return this.entityManager.findOne(User, { email: { $ilike: email } });
  }

  async create(
    username: string,
    email: string,
    password: string,
  ): Promise<User> {
    const user = new User(username, email, password);
    await this.entityManager.persistAndFlush(user);
    return user;
  }
}
