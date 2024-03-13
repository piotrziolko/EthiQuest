import { Migration } from '@mikro-orm/migrations';

export class Migration20240312182323 extends Migration {
  async up(): Promise<void> {
    this.addSql(
      'create table "template" ("uuid" varchar(255) not null, "created_at" timestamptz not null, "updated_at" timestamptz not null, "name" varchar(255) not null, "data" jsonb null, constraint "template_pkey" primary key ("uuid"));',
    );

    this.addSql(
      'alter table "user" add column "created_at" timestamptz not null, add column "updated_at" timestamptz not null;',
    );
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists "template" cascade;');

    this.addSql('alter table "user" drop column "created_at";');
    this.addSql('alter table "user" drop column "updated_at";');
  }
}
