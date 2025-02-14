import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { GraphqlModule } from './graphql/graphql.module';
import { APP_GUARD } from '@nestjs/core';
import { ThrottlerModule } from '@nestjs/throttler';
import { HttpThrottlerGuard } from './guards/http-throttler.guard';
import { GqlThrottlerGuard } from './guards/graphql-throttler.guard';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { EmailModule } from './email/email.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ThrottlerModule.forRoot([{
      ttl: 60,
      limit: 10,
      ignoreUserAgents: [/^(?!.*browser).*$/i],
    }]),
    MongooseModule.forRoot("mongodb+srv://muthukrishnan07212004:oJee2e2Qwkwqw0WJ@cluster0.kch5c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"),
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
