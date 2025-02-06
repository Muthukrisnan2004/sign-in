import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@ObjectType()
@Schema({ timestamps: true })
export class Book extends Document {

    @Field(() => String)
    @Prop({ required: true })
    title: string;

    @Field(() => String)
    @Prop({ required: true })
    author: string;

    @Field()
    publishedDate: string;

    @Field({ nullable: true })
    description?: string;

    @Prop({ required: true })
    price: number;
}

export const BookSchema = SchemaFactory.createForClass(Book);