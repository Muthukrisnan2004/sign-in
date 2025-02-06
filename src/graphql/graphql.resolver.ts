import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { GraphqlService } from './graphql.service';
import { Book } from './entities/book.entity';
import { CreateBookInput } from './dto/create-book.input';
import { JwtAuthGuard } from '../auth/jwt.guard';
import { GqlAuthGuard } from './gql-auth.guard';


@Resolver(() => Book)
@UseGuards(GqlAuthGuard)
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
    return this.graphqlService.createBook(createBookInput);
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
}