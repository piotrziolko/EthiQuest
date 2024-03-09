import { Migration } from '@mikro-orm/migrations';

export class Migration20240309094640 extends Migration {
  async up(): Promise<void> {
    this.addSql(
      'create table "user" ("uuid" varchar(255) not null, "name" varchar(255) not null, constraint "user_pkey" primary key ("uuid"));',
    );
  }
}
