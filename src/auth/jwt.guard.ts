import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()

export class JwtAuthGuard extends AuthGuard('jwt') {}


// import { ExecutionContext, Injectable } from '@nestjs/common';
// import { GqlExecutionContext } from '@nestjs/graphql';
// import { AuthGuard } from '@nestjs/passport';

// @Injectable()
// export class GqlAuthGuard extends AuthGuard('jwt') {
//   getRequest(context: ExecutionContext) {
//     const ctx = GqlExecutionContext.create(context);
//     const request = ctx.getContext().req;
//     return request;
//   }
// }