import { Module } from '@nestjs/common';
import { HashingService } from './services/hashing.service';

@Module({
  providers: [HashingService],
  exports: [HashingService],
})
export class UtilsModule {}
