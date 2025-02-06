import { Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';
import { User } from '@prisma/client';

@Injectable()
class SessionSerializer extends PassportSerializer {
  constructor() {
    super();
  }

  serializeUser(user: User, done: (err: Error | null, user: any) => void): void {
    done(null, user);
  }

  deserializeUser(payload: any, done: (err: Error | null, payload: string) => void): void {
    done(null, payload);
  }
}

export { SessionSerializer };
