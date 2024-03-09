import { Entity, PrimaryKey, Property } from '@mikro-orm/core';
import { v4 } from 'uuid';

@Entity()
export class User {
  @PrimaryKey()
  uuid = v4();

  @Property()
  name!: string;

  @Property()
  password!: string;

  constructor(name: string) {
    this.name = name;
  }
}
