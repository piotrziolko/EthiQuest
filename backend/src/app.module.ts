import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [MikroOrmModule.forRoot(), AuthModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
