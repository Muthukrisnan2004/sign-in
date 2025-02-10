import { ObjectType, Field, ID, Float } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BookDocument = Book & Document;

@Schema()
@ObjectType()
export class Book {
  @Field(() => ID)
  id: string;

  @Prop({ required: true })
  @Field()
  title: string;

  @Prop({ required: true })
  @Field()
  author: string;

  @Prop({ required: true })
  @Field(() => Float)
  price: number;

  @Prop({ default: Date.now })
  @Field()
  createdAt: Date;
}

export const BookSchema = SchemaFactory.createForClass(Book);