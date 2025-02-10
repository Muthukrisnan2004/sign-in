import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';

@InputType()
export class CreateBookInput {
  @Field(() => String)          
  title: string;

  @Field(() => String)
  author: string;

  @Field()
  price: number;

  // Add other fields as needed
}