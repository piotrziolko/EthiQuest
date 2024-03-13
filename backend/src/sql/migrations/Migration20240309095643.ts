import { Migration } from '@mikro-orm/migrations';

export class Migration20240309095643 extends Migration {
  async up(): Promise<void> {
    this.addSql(
      'alter table "user" add column "password" varchar(255) not null;',
    );
  }

  async down(): Promise<void> {
    this.addSql('alter table "user" drop column "password";');
  }
}
