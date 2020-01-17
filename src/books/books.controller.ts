import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {BooksService} from './books.service';
import {BookDto} from './bookDto';

@Controller('books')
export class BooksController {

    constructor(private bookService: BooksService) {
    }

    @Get(':id')
    getOneBook(@Param('id') id: number) {
        return this.bookService.getOneBook(id);
    }

    @Get()
    getAllBooks() {
        return this.bookService.getAllBooks();
    }

    @Post()
    createBook(@Body() bookDTO: BookDto) {
        return this.bookService.createBook(bookDTO);
    }

    @Put(':id')
    updateBook(@Param('id') id: number, @Body() bookDTO: BookDto) {
        return this.bookService.updateBook(id, bookDTO);
    }

    @Delete(':id')
    deleteBook(@Param('id') id: number) {
        return this.bookService.deleteBook(id);
    }
}
