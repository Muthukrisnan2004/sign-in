import { Injectable, ExecutionContext } from '@nestjs/common';
import { ThrottlerGuard } from '@nestjs/throttler';
import { GqlExecutionContext } from '@nestjs/graphql';

@Injectable()
export class GraphqlThrottlerGuard extends ThrottlerGuard {
  getRequestResponse(context: ExecutionContext) {
    const gqlCtx = GqlExecutionContext.create(context);
    const { req, res } = gqlCtx.getContext();
    
    if (!req?.headers) {
      return { 
        req: { 
          ip: req?.ip || '127.0.0.1',
          headers: {}
        },
        res
      };
    }
    
    return { req, res };
  }
}