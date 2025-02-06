import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from 'prisma/prisma.module';  
import { UsersModule } from './users/users.module';
import { GraphqlModule } from './graphql/graphql.module';
import { GqlThrottlerGuard } from './guards/graphql-throttler.guard';
import { APP_GUARD } from '@nestjs/core';
import { ThrottlerModule } from '@nestjs/throttler';
import { HttpThrottlerGuard } from './guards/http-throttler.guard';

@Module({
  imports: [
    ThrottlerModule.forRoot([{
      ttl: 60000,
      limit: 10,
    }]),
    AuthModule,
    PrismaModule, 
    UsersModule, 
    GraphqlModule
  ],
  providers: [{
    provide: APP_GUARD,
    useClass: GqlThrottlerGuard,
  }, {
    provide: APP_GUARD,
    useClass: HttpThrottlerGuard,
  }],
})
export class AppModule {}
