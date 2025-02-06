import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateBookInput } from './dto/create-book.input';
import { Book } from './entities/book.entity';

@Injectable()
export class GraphqlService {
  constructor(private prisma: PrismaService) {}

  async createBook(createBookInput: CreateBookInput): Promise<Book> {
    const book = await this.prisma.book.create({
      data: createBookInput,
    });
    return this.transformBook(book);
  }

  async findAllBooks(): Promise<Book[]> {
    const books = await this.prisma.book.findMany();
    return books.map(this.transformBook);
  }

  async findOneBook(id: string): Promise<Book> {
    const book = await this.prisma.book.findUnique({
      where: { id },
    });
    if (!book) throw new Error('Book not found');
    return this.transformBook(book);
  }

  async updateBook(id: string, updateBookInput: CreateBookInput): Promise<Book> {
    const book = await this.prisma.book.update({
      where: { id },
      data: updateBookInput,
    });
    return this.transformBook(book);
  }

  async removeBook(id: string): Promise<Book> {
    const book = await this.prisma.book.delete({
      where: { id },
    });
    return this.transformBook(book);
  }

  private transformBook(book: any): Book {
    return {
      ...book,
      description: book.description || undefined,
    };
  }
}