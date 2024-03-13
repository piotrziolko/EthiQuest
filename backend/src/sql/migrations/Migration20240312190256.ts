import { Migration } from '@mikro-orm/migrations';

export class Migration20240312190256 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "template" add column "owner_uuid" varchar(255) not null;');
    this.addSql('alter table "template" add constraint "template_owner_uuid_foreign" foreign key ("owner_uuid") references "user" ("uuid") on update cascade;');
  }

  async down(): Promise<void> {
    this.addSql('alter table "template" drop constraint "template_owner_uuid_foreign";');

    this.addSql('alter table "template" drop column "owner_uuid";');
  }

}
