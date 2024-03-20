import { Request } from 'express';

export class JwtUserPayload {
  username: string;
  sub: string;
  email: string;
  permissions: string[];
}

export class RequestWithUserPayload extends Request {
  user: JwtUserPayload;
}
