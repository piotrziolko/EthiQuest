import { Migration } from '@mikro-orm/migrations';

export class Migration20240312192303 extends Migration {
  async up(): Promise<void> {
    this.addSql(
      'create table "form" ("uuid" varchar(255) not null, "created_at" timestamptz not null, "updated_at" timestamptz not null, "template_uuid" varchar(255) not null, "owner_uuid" varchar(255) not null, "start_date" timestamptz null, "end_date" timestamptz null, constraint "form_pkey" primary key ("uuid"));',
    );

    this.addSql(
      'create table "form_response" ("uuid" varchar(255) not null, "created_at" timestamptz not null, "updated_at" timestamptz not null, "form_uuid" varchar(255) not null, "owner_uuid" varchar(255) not null, constraint "form_response_pkey" primary key ("uuid"));',
    );

    this.addSql(
      'alter table "form" add constraint "form_template_uuid_foreign" foreign key ("template_uuid") references "template" ("uuid") on update cascade;',
    );
    this.addSql(
      'alter table "form" add constraint "form_owner_uuid_foreign" foreign key ("owner_uuid") references "user" ("uuid") on update cascade;',
    );

    this.addSql(
      'alter table "form_response" add constraint "form_response_form_uuid_foreign" foreign key ("form_uuid") references "form" ("uuid") on update cascade;',
    );
    this.addSql(
      'alter table "form_response" add constraint "form_response_owner_uuid_foreign" foreign key ("owner_uuid") references "user" ("uuid") on update cascade;',
    );
  }

  async down(): Promise<void> {
    this.addSql(
      'alter table "form_response" drop constraint "form_response_form_uuid_foreign";',
    );

    this.addSql('drop table if exists "form" cascade;');

    this.addSql('drop table if exists "form_response" cascade;');
  }
}
