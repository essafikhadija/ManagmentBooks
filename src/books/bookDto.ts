import {IsInt, IsString, Max, Min} from 'class-validator';
import {ApiProperty} from '@nestjs/swagger';

export class BookDto {

    @IsString()
    @ApiProperty()
    name: string;

    @IsInt({message: 'le prix doit etre un entier'})
    @ApiProperty()
    @Min(10, {message: 'le prix doit etre supérieur à 10'})
    @Max(500, {message: 'le prix doit etre inférieur à 500'})
    price: number;
}
