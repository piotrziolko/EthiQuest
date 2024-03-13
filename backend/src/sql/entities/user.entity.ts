import { Collection, Entity, Enum, OneToMany, Property } from '@mikro-orm/core';
import Permission from '../../auth/types/permission.type';
import { BaseEntity } from './base.entity';
import { Template } from './template.entity';
import { Form } from './form.entity';
import { FormResponse } from './form-response.entity';

@Entity()
export class User extends BaseEntity {
  @Property()
  name!: string;

  @Property()
  password!: string;

  @Enum({ items: () => Permission, array: true, default: [] })
  public permissions: Permission[];

  @OneToMany(() => Template, (template) => template.owner)
  templates = new Collection<Template>(this);

  @OneToMany(() => Form, (form) => form.owner)
  forms = new Collection<Form>(this);

  @OneToMany(() => FormResponse, (formResponse) => formResponse.owner)
  formResponse = new Collection<FormResponse>(this);

  constructor(name: string, password: string) {
    super();
    this.name = name;
    this.password = password;
  }
}
