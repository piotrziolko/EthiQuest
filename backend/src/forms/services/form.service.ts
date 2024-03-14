import { Injectable } from '@nestjs/common';
import { Form } from '../../sql/entities/form.entity';
import { EntityManager } from '@mikro-orm/postgresql';

@Injectable()
export class FormService {
  constructor(private readonly entityManager: EntityManager) {}

  async findOne(id: string): Promise<Form | undefined> {
    const form = await this.entityManager.findOne(Form, { uuid: id });
    if (!form) {
      throw new Error('Template not found');
    }
    return form;
  }

  async create(
    templateId: string,
    ownerId: string,
    startDate: Date | null,
    endDate: Date | null,
  ): Promise<Form> {
    const form = new Form(templateId, ownerId, startDate, endDate);
    await this.entityManager.persistAndFlush(form);
    return form;
  }

  async findAll(): Promise<Form[]> {
    return this.entityManager.find(Form, {});
  }

  async update(
    id: string,
    startDate: Date | null,
    endDate: Date | null,
  ): Promise<Form> {
    const form = await this.entityManager.findOne(Form, { uuid: id });
    if (!form) {
      throw new Error('Form not found');
    }
    form.startDate = startDate;
    form.endDate = endDate;
    await this.entityManager.persistAndFlush(form);
    return form;
  }

  async remove(id: string): Promise<void> {
    const form = await this.entityManager.findOne(Form, { uuid: id });
    if (!form) {
      throw new Error('Form not found');
    }
    await this.entityManager.removeAndFlush(form);
  }
}
