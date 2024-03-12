import { Entity, Enum, PrimaryKey, Property } from "@mikro-orm/core";
import { v4 } from 'uuid';
import Permission from "../../auth/types/permission.type";

@Entity()
export class User {
  @PrimaryKey()
  uuid = v4();

  @Property()
  name!: string;

  @Property()
  password!: string;

  @Enum({ items: () => Permission, array: true, default: [] })
  public permissions: Permission[];

  constructor(name: string, password: string) {
    this.name = name;
    this.password = password;
  }
}
