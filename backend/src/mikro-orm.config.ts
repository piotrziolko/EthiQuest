import { Options, PostgreSqlDriver } from '@mikro-orm/postgresql';
import { Migrator } from '@mikro-orm/migrations';

const config: Options = {
  entities: ['./dist/sql/entities/**/*.js'],
  entitiesTs: ['./src/sql/entities/**/*.ts'],
  dbName: 'db',
  driver: PostgreSqlDriver,
  debug: true,
  password: 'root',
  user: 'postgres',
  migrations: {
    path: 'dist/sql/migrations',
    pathTs: 'src/sql/migrations',
  },
  extensions: [Migrator],
};

export default config;
