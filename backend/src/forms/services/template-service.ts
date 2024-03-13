import { Injectable } from '@nestjs/common';
import { EntityManager } from '@mikro-orm/postgresql';
import { Template } from '../../sql/entities/template.entity';

@Injectable()
export class TemplateService {
  constructor(private readonly entityManager: EntityManager) {}
  async findOne(id: string): Promise<Template | undefined> {
    const template = await this.entityManager.findOne(Template, { uuid: id });
    if (!template) {
      throw new Error('Template not found');
    }
    return template;
  }

  async create(
    name: string,
    data: Record<string, any>,
    ownerId: string,
  ): Promise<Template> {
    const template = new Template(name, data, ownerId);
    await this.entityManager.persistAndFlush(template);
    return template;
  }

  async findAll(): Promise<Template[]> {
    return this.entityManager.find(Template, {});
  }

  async update(
    id: string,
    name: string,
    data: Record<string, any>,
  ): Promise<Template> {
    const template = await this.entityManager.findOne(Template, { uuid: id });
    if (!template) {
      throw new Error('Template not found');
    }
    template.name = name;
    template.data = data;
    await this.entityManager.persistAndFlush(template);
    return template;
  }

  async remove(id: string): Promise<void> {
    const template = await this.entityManager.findOne(Template, { uuid: id });
    if (!template) {
      throw new Error('Template not found');
    }
    await this.entityManager.removeAndFlush(template);
  }
}
