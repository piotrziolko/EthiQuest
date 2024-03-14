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
import { Template } from './template.entity';
import { User } from './user.entity';
import { FormResponse } from './form-response.entity';

@Entity()
export class Form extends BaseEntity {
  @ManyToOne(() => Template)
  template!: Ref<Template>;

  @ManyToOne(() => User)
  owner!: Ref<User>;

  @Property({ type: 'datetime', nullable: true })
  startDate: Date = null;

  @Property({ type: 'datetime', nullable: true })
  endDate: Date = null;

  @OneToMany(() => FormResponse, (formResponse) => formResponse.form)
  formResponse = new Collection<FormResponse>(this);

  constructor(
    templateId: string,
    ownerId: string,
    startDate: Date,
    endDate: Date,
  ) {
    super();
    this.template = ref(Template, templateId);
    this.owner = ref(User, ownerId);
    this.startDate = startDate;
    this.endDate = endDate;
  }
}
