import { Module } from '@nestjs/common';
import { BooksModule } from './books/books.module';
import {TypeOrmModule} from '@nestjs/typeorm';
import {BookEntity} from './books/book.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'apiresnode',
    entities: [BookEntity],
    synchronize: true,
  }), BooksModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
