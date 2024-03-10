import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [MikroOrmModule.forRoot(), ConfigModule.forRoot(
    {
      isGlobal: true,
    }
  ), AuthModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
