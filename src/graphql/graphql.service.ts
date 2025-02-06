import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Book } from './schemas/book.schema';
import { CreateBookInput } from './dto/create-book.input';

export type BookDocument = Book & Document;

@Injectable()
export class GraphqlService {
  constructor(
    @InjectModel(Book.name) private bookModel: Model<BookDocument>
  ) {}

  async create(createBookInput: CreateBookInput): Promise<Book> {
    const createdBook = new this.bookModel(createBookInput);
    return createdBook.save();
  }

  async findAllBooks() {
    return this.bookModel.find().exec();
  }

  async findOneBook(id: string) {
    return this.bookModel.findById(id).exec();
  }

  async updateBook(id: string, updateBookInput: any) {
    return this.bookModel
      .findByIdAndUpdate(id, updateBookInput, { new: true })
      .exec();
  }

  async removeBook(id: string) {
    return this.bookModel.findByIdAndDelete(id).exec();
  }
}