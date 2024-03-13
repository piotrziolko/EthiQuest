import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from '../../users/services/users.service';
import { JwtService } from '@nestjs/jwt';
import { HashingService } from '../../utils/services/hashing.service';
import { JwtUserPayload } from '../dto/request-with-user.payload';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
    private readonly hashingService: HashingService,
  ) {}

  async signIn(username: string, password: string) {
    const user = await this.usersService.findOne(username);
    if (user && (await this.hashingService.compare(password, user.password))) {
      return {
        access_token: await this.createAccessToken({
          username: user.name,
          sub: user.uuid,
          permissions: user.permissions,
        }),
      };
    }
    throw new UnauthorizedException();
  }

  async register(username: string, password: string) {
    const user = await this.usersService.findOne(username);
    if (user) {
      throw new BadRequestException('User already exists');
    }

    const hashedPassword = await this.hashingService.hash(password);
    const createdUser = await this.usersService.create(
      username,
      hashedPassword,
    );

    return {
      access_token: await this.createAccessToken({
        username,
        sub: createdUser.uuid,
        permissions: createdUser.permissions,
      }),
    };
  }

  private createAccessToken(payload: JwtUserPayload) {
    return this.jwtService.signAsync(payload);
  }
}
