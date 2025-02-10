import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { GraphqlService } from './graphql.service';
import { Book } from './schemas/book.schema';
import { CreateBookInput } from './dto/create-book.input';
import { JwtAuthGuard } from '../auth/jwt.guard';

import { AuthorBookCount, PriceStats } from './dto/aggregation.types';
import { GqlAuthGuard } from './gql-auth.guard';

@Resolver(() => Book)
@UseGuards(GqlAuthGuard)  // autheroized user can only see
export class GraphqlResolver {
  constructor(private readonly graphqlService: GraphqlService) {}

  @Query(() => [Book], { name: 'books' })
  findAll() {
    return this.graphqlService.findAllBooks();
  }

  @Query(() => Book, { name: 'book' })
  findOne(@Args('id') id: string) {
    return this.graphqlService.findOneBook(id);
  }

  @Mutation(() => Book)
  createBook(@Args('createBookInput') createBookInput: CreateBookInput) {
    return this.graphqlService.create(createBookInput);
  }

  @Mutation(() => Book)
  updateBook(
    @Args('id') id: string,
    @Args('updateBookInput') updateBookInput: CreateBookInput,
  ) {
    return this.graphqlService.updateBook(id, updateBookInput);
  }

  @Mutation(() => Book)
  removeBook(@Args('id') id: string) {
    return this.graphqlService.removeBook(id);
  }

  @Query(() => Number, { name: 'totalBooks' })
  async getTotalBooks() {
    return this.graphqlService.getTotalBooks();
  }

  @Query(() => [AuthorBookCount], { name: 'booksByAuthor' })
  async getBooksByAuthor() {
    return this.graphqlService.getBooksByAuthor();
  }

  @Query(() => PriceStats, { name: 'bookPriceStats' })
  async getBookPriceStats() {
    return this.graphqlService.getBookPriceStats();
  }
}