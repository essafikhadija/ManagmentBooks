import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity('book')
export class BookEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    price: number;
}
