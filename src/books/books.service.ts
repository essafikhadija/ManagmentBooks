import {Injectable, NotFoundException} from '@nestjs/common';
import {BookEntity} from './book.entity';
import {Repository} from 'typeorm';
import {InjectRepository} from '@nestjs/typeorm';
import {BookDto} from './bookDto';
import {NotAuthorisedPriceException} from './NotAuthorisedPriceException';

@Injectable()
export class BooksService {

    constructor(@InjectRepository(BookEntity)
                private readonly bookRepository: Repository<BookEntity>) {
    }

    async getOneBook(id: number) {
        const result = await this.bookRepository.findOne(id);

        if (!result) {
            throw new NotFoundException('Le livre demandé est non trouvé');
        }
        return result;
    }

    getAllBooks() {
        return this.bookRepository.find();
    }

    createBook(bookDto: BookDto) {
        if (bookDto.price > 1000) {
            throw new NotAuthorisedPriceException();
        }

        return this.bookRepository.save(bookDto);
    }

    updateBook(id: number, bookDto: BookDto) {
        return this.bookRepository.update(id, bookDto);
    }

    deleteBook(id: number) {
        return this.bookRepository.delete(id);
    }
}
