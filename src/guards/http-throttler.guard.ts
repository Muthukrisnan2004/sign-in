import { Injectable, ExecutionContext } from '@nestjs/common';
import { ThrottlerGuard } from '@nestjs/throttler';

@Injectable()
export class HttpThrottlerGuard extends ThrottlerGuard {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const type = context.getType<string>();
    if (type === 'graphql') {
      return true;
    }
    return super.canActivate(context);
  }

  protected async getTracker(req: Record<string, any>): Promise<string> {
    return Promise.resolve(
      req.headers['x-real-ip'] || 
      req.headers['x-forwarded-for'] || 
      req.ip ||
      req.socket?.remoteAddress ||
      '127.0.0.1'
    );
  }

  getRequestResponse(context: ExecutionContext) {
    const http = context.switchToHttp();
    const req = http.getRequest();
    const res = http.getResponse();

    if (!req.headers) {
      req.headers = {};
    }

    return { req, res };
  }
}