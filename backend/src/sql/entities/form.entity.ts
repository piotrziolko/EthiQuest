import { Collection, Entity, ManyToOne, OneToMany, Property } from "@mikro-orm/core";
import { BaseEntity } from './base.entity';
import { Template } from "./template.entity";
import { User } from "./user.entity";
import { FormResponse } from "./form-response.entity";

@Entity()
export class Form extends BaseEntity {
  @ManyToOne(() => Template)
  template!: Template;

  @ManyToOne(() => User)
  owner!: User;

  @Property({ type: 'datetime', nullable: true })
  startDate: Date = null;

  @Property({ type: 'datetime', nullable: true })
  endDate: Date = null;

  @OneToMany(() => FormResponse, (formResponse) => formResponse.form)
  formResponse = new Collection<FormResponse>(this);

  constructor(template: Template) {
    super();
    this.template = template;
  }
}
