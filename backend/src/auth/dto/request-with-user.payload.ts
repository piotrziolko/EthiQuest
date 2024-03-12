import { Request } from 'express';

export class JwtUserPayload {
  username: string;
  sub: string;
  permissions: string[];
}

export class RequestWithUserPayload extends Request {
  user: JwtUserPayload;
}
