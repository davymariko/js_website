import { Book } from './Book.js';

let bookOne = new Book('The Land', 'Davy Mariko', 302, 'This Book Talks about the composition of the soil and its attributes');

let bookTwo = new Book('Water', 'Davy Mariko', 258, 'This Book Talks about water and its benefits');

let bookThree = new Book('The Air', 'Davy Mariko', 347, 'This Book Talks about the air and its impact on our daily lives');

let bookFour = new Book('The Fire', 'Davy Mariko', 286, 'This Book Talks about the Fire and its use');

let bookList = [bookOne, bookTwo, bookThree, bookFour];

export { bookList };