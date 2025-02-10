import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Book, BookDocument } from './schemas/book.schema';
import { CreateBookInput } from './dto/create-book.input';
import { AuthorBookCount, PriceStats } from './dto/aggregation.types';

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

  async getTotalBooks(): Promise<number> {
    return this.bookModel.countDocuments().exec();
  }

  async getBooksByAuthor(): Promise<AuthorBookCount[]> {
    const result = await this.bookModel.aggregate([
      {
        $group: {
          _id: '$author',
          bookCount: { $sum: 1 }
        }
      },
      {
        $project: {
          _id: 0,
          author: '$_id',
          bookCount: 1
        }
      }
    ]).exec();
    return result;
  }

  async getBookPriceStats(): Promise<PriceStats> {
    const [result] = await this.bookModel.aggregate([
      {
        $group: {
          _id: null,
          maxPrice: { $max: '$price' },
          minPrice: { $min: '$price' }
        }
      },
      {
        $project: {
          _id: 0,
          maxPrice: 1,
          minPrice: 1
        }
      }
    ]).exec();
    return result || { maxPrice: 0, minPrice: 0 };
  }
}