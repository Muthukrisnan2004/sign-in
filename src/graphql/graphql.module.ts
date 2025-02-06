import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphqlService } from './graphql.service';
import { GraphqlResolver } from './graphql.resolver';
import { PrismaModule } from 'prisma/prisma.module';
import { JwtStrategy } from '../auth/jwt.strategy';


@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      context: ({ req,res }) => ({ req,res }),
      playground: true,
    }),
    PrismaModule,
  ],
  providers: [GraphqlService, GraphqlResolver, JwtStrategy],
})
export class GraphqlModule {}