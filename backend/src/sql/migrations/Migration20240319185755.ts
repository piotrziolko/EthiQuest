import { Migration } from '@mikro-orm/migrations';

export class Migration20240319185755 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "user" add column "email" varchar(255) not null;');
  }

  async down(): Promise<void> {
    this.addSql('alter table "user" drop column "email";');
  }

}
