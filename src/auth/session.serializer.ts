import { PassportSerializer } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { User } from '../schemas/user.schema';

@Injectable()
export class SessionSerializer extends PassportSerializer {
  serializeUser(user: User, done: (err: Error | null, user: any) => void): any {
    done(null, user);
  }

  deserializeUser(payload: any, done: (err: Error | null, payload: any) => void): any {
    done(null, payload);
  }
}
