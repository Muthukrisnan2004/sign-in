import { ObjectType, Field, Int, Float } from '@nestjs/graphql';

@ObjectType()
export class AuthorBookCount {
  @Field()
  author: string;

  @Field(() => Int)
  bookCount: number;
}

@ObjectType()
export class PriceStats {
  @Field(() => Float)
  maxPrice: number;

  @Field(() => Float)
  minPrice: number;
}