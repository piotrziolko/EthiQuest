import { Entity, ManyToOne, Ref, ref } from '@mikro-orm/core';
import { BaseEntity } from './base.entity';
import { User } from './user.entity';
import { Form } from './form.entity';

@Entity()
export class FormResponse extends BaseEntity {
  @ManyToOne(() => Form)
  form!: Ref<Form>;

  @ManyToOne(() => User)
  owner!: Ref<User>;

  constructor(formId: string, ownerId: string) {
    super();
    this.form = ref(Form, formId);
    this.owner = ref(User, ownerId);
  }
}
