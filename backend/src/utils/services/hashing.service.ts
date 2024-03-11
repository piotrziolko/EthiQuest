import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class HashingService {
  SALT_OR_ROUNDS = 10;
  async hash(password: string) {
    return await bcrypt.hash(password, this.SALT_OR_ROUNDS);
  }

  async compare(password: string, hash: string) {
    return await bcrypt.compare(password, hash);
  }
}
