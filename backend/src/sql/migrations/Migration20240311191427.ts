import { Migration } from '@mikro-orm/migrations';

export class Migration20240311191427 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "user" add column "permissions" text[] not null default \'{}\';');
  }

  async down(): Promise<void> {
    this.addSql('alter table "user" drop column "permissions";');
  }

}
