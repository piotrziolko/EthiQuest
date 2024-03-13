import {
  Collection,
  Entity,
  ManyToOne,
  OneToMany,
  Property,
  Ref,
  ref,
} from '@mikro-orm/core';
import { BaseEntity } from './base.entity';
import { User } from './user.entity';
import { Form } from './form.entity';

@Entity()
export class Template extends BaseEntity {
  @Property()
  name!: string;

  @Property({ type: 'json', nullable: true })
  data: Record<string, any> = null;

  @ManyToOne(() => User)
  owner!: Ref<User>;

  @OneToMany(() => Form, (form) => form.template)
  forms = new Collection<Form>(this);

  constructor(name: string, data: Record<string, any>, ownerId: string) {
    super();
    this.name = name;
    this.data = data;
    this.owner = ref(User, ownerId);
  }
}
