import { Entity, ManyToOne } from '@mikro-orm/core';
import { BaseEntity } from './base.entity';
import { User } from './user.entity';
import { Form } from './form.entity';

@Entity()
export class FormResponse extends BaseEntity {
  @ManyToOne(() => Form)
  form!: Form;

  @ManyToOne(() => User)
  owner!: User;

  constructor(form: Form, owner: User) {
    super();
    this.form = form;
    this.owner = owner;
  }
}
