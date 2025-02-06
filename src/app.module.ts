import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { GraphqlModule } from './graphql/graphql.module';
import { APP_GUARD } from '@nestjs/core';
import { ThrottlerModule } from '@nestjs/throttler';
import { HttpThrottlerGuard } from './guards/http-throttler.guard';
import { GqlThrottlerGuard } from './guards/graphql-throttler.guard';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ThrottlerModule.forRoot([{
      ttl: 60,
      limit: 10,
      ignoreUserAgents: [/^(?!.*browser).*$/i],
    }]),
    MongooseModule.forRoot(process.env.DATABASE_URL),
    AuthModule, 
    GraphqlModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: HttpThrottlerGuard,
    }
  ],
})
export class AppModule {}
