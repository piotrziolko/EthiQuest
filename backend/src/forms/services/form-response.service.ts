import { Injectable } from '@nestjs/common';
import { EntityManager } from '@mikro-orm/postgresql';
import { FormResponse } from '../../sql/entities/form-response.entity';

@Injectable()
export class FormResponseService {
  constructor(private readonly entityManager: EntityManager) {}

  async findOne(id: string): Promise<FormResponse | undefined> {
    const formResponse = await this.entityManager.findOne(FormResponse, {
      uuid: id,
    });
    if (!formResponse) {
      throw new Error('FormResponse not found');
    }
    return formResponse;
  }

  async create(formId: string, ownerId: string): Promise<FormResponse> {
    const formResponse = new FormResponse(formId, ownerId);
    await this.entityManager.persistAndFlush(formResponse);
    return formResponse;
  }

  async findAll(): Promise<FormResponse[]> {
    return this.entityManager.find(FormResponse, {});
  }

  async update(id: string): Promise<FormResponse> {
    const formResponse = await this.entityManager.findOne(FormResponse, {
      uuid: id,
    });
    if (!formResponse) {
      throw new Error('FormResponse not found');
    }
    await this.entityManager.persistAndFlush(formResponse);
    return formResponse;
  }

  async remove(id: string): Promise<void> {
    const formResponse = await this.entityManager.findOne(FormResponse, {
      uuid: id,
    });
    if (!formResponse) {
      throw new Error('FormResponse not found');
    }
    await this.entityManager.removeAndFlush(formResponse);
  }
}
