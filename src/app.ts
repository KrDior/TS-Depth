import { Book, Logger as DamageLogger, Person, Author, Librarian } from './interfaces';
import { ReferenceItem1, ReferenceItem } from './classes';
import { Category } from './enums';
import { RefBook } from './classes/index';
import { UniversityLibrarian } from './classes/index';

showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
	const elt = document.getElementById(divName);
	elt.innerText = `Hello from ${name}`;
}

function getAllBooks(): ReadonlyArray<Book> {
	const books: readonly Book[] = [
		{ id: 1, title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true, category: Category.JavaScript },
		{ id: 2, title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false, category: Category.JavaScript },
		{ id: 3, title: 'CSS Secrets', author: 'Lea Verou', available: true, category: Category.CSS },
		{ id: 4, title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true, category: Category.JavaScript }
	] as const;

	return books;
}

function logFirstAvailable(books: readonly any[] = getAllBooks()): void {
	const numOfBooks: number = books.length;
	let title: string = '';

	for (const book of books) {
		if (book.available) {
			title = book.title;
			break;
		}
	}

	console.log(`Total number of books: ${numOfBooks}`);
	console.log(`First available book: ${title}`);
}

function getBookTitlesByCategory(category: Category = Category.JavaScript): Array<string> {
	console.log(`Getting books in category: ${Category[category]}`);

	const books = getAllBooks();
	const titles: Array<string> = [];

	for (const book of books) {
		if (book.category === category) {
			titles.push(book.title);
		}
	}

	return titles;
}

function logBookTitles(titles: Array<string>): void {
	for (const title of titles) {
		console.log(title);
	}
}

function getBookAuthorByIndex(index: number): [string, string] {
	const books = getAllBooks();
	const { title, author } = books[index];

	return [title, author];
}



// function calcTotalPages(): bigint {
// 	const data = [
// 		{ lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 },
// 		{ lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 },
// 		{ lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 }
// 	] as const;

// 	const result = data.reduce((acc: bigint, obj: Library) => {
// 		return acc + BigInt(obj.books * obj.avgPagesPerBook);
// 	}, 0n);

// 	return result;
// }

function getBookById(id: number): BookOrUndefined {
	const books = getAllBooks();

	return books.find((book) => book.id === id);
}

function createCustomerId(name: string, id: number): string {
	return `${name}${id}`;
}

function printBook(book: Book): void {
	console.log(`${book.title} by ${book.author}`);
}

// Task 02.01

// logFirstAvailable(getAllBooks());

// const titles = getBookTitlesByCategory(Category.JavaScript);
// logBookTitles(titles);

// const titleAndAuthor = getBookAuthorByIndex(2);

// console.log(calcTotalPages());


// Task 03.01

// const titles2 = getBookTitlesByCategory(Category.JavaScript);

// titles2.forEach((title: string) => {
// 	console.log(title);
// });

// console.log(getBookById(1));

// Task 03.02

// const myId: string = createCustomerId('Ann', 10);
// console.log(myId);

// let idGenerator: (name: string, id: number) => string;
// idGenerator: (name: string, id: number) => `${name}${id}`;
// idGenerator = createCustomerId;

// console.log(idGenerator('Boris', 2));


// Task 03.03

// function createCustomer(name: string, age?: number, city?: string): void {
// 	console.log(`Customer name: ${name}`);

// 	age ? console.log(`Customer age: ${age}`) : '';
// 	city ? console.log(`Customer city: ${city}`) : '';
// }

// createCustomer('Ann', 12, 'Moscow');

// const titles = getBookTitlesByCategory();
// console.log(titles);

// logFirstAvailable();

// function checkoutBooks(customer: string, ...bookIDs: number[]): string[] {
// 	console.log(`Customer name: ${customer}`);
// 	const titles = [] as string[];

// 	for (const id of bookIDs) {
// 		const book = getBookById(id);
// 		if (book && book.available) {
// 			titles.push(book.title);
// 		}
// 	}
// 	return titles;
// }

// const myBooks: string[] = checkoutBooks('Ann', 1, 2, 4);
// console.log(myBooks);

// Task 03.04

// function getTitles(author: string): string[];
// function getTitles(available: boolean): string[];
// function getTitles(id: number, available: boolean): string[];

// function getTitles(...args: any): string[] {
// 	const books = getAllBooks();

// 	if (args.length === 0) {
// 		return [];
// 	}
// 	else if (args.length === 1) {
// 		const arg = args[0];

// 		if (typeof arg === 'string') {
// 			return books.filter(book => book.author === arg).map(book => book.title);
// 		}
// 		else if (typeof arg === 'boolean') {
// 			return books.filter(book => book.available === arg).map(book => book.title);
// 		}
// 	}
// 	else if (args.length === 2) {
// 		const [id, available] = args;
// 		if (typeof id === 'number' && typeof available === 'boolean') {
// 			return books.filter(book => book.id === id && book.available === available).map(book => book.title);
// 		}
// 	}
// }

// const checkoutBooks = getTitles(false);
// console.log(checkoutBooks);


// Task 03.05

// function assertStringValue(value: any): asserts value is string {
// 	if (typeof value !== 'string') {
// 		throw new Error('value should have been a string');
// 	}
// }

// function bookTitleTransform(title: string): string {
// 	assertStringValue(title);

// 	return [...title].reverse().join('');
// }

// console.log(bookTitleTransform('string'));
// console.log(bookTitleTransform(''));


// Task 04.01

const myBook: Book = {
	id: 5,
	title: 'Colors, Backgrounds, and Gradients',
	author: 'Eric A. Meyer',
	available: true,
	category: Category.CSS,
	pages: 200,
	markDamaged: (reason: string) => console.log(`Damaged: ${reason}`)

};

// printBook(myBook);
// myBook.markDamaged('missing back cover');


// Task 04.02


const f = (damage: string) => console.log(`Damage reporter: ${damage}`);

const logDamage: DamageLogger = f;
// logDamage('missing back cover');

// Task 04.03


const favoriteAuthor: Author = {
	name: 'Boris',
	email: 'same@test.com',
	numBooksPublished: 4,
};

const favorityLibrarian: Librarian = {
	name: 'Anna',
	email: 'twoEm@test.com',
	department: 'Classics',
	assistCustomer(name: string) {
		console.log(`Assist ${name}`);
	}
};


// Task 04.04

const offer: any = {
	book: {
	title: 'Essential TypeScript'
	}
};

// console.log(offer?.magazine);

// Task 04.05

type BookProperties = keyof Book;

function getBookProp(book: Book, prop: BookProperties): any {
	if (typeof book[prop] === 'function') {
		return (book[prop] as Function).name;
	}
	if (typeof book[prop] === 'string') {
		return book[prop];
	}
}

// console.log(getBookProp(getAllBooks()[0], 'title'));
// console.log(getBookProp(getAllBooks()[0], 'markDamaged'));

// Task 05.01


const ref1: ReferenceItem1 = new ReferenceItem1('Our new title', 2020);
ref1.printItem();


// const ref: ReferenceItem = new ReferenceItem('Our new title', 2020);
// ref.publisher = 'Random publisher';

// Task 05.02

const refBook: RefBook = new RefBook('Title', 2020, 3);
refBook.printItem();

// Task 05.03

const refBook2: RefBook = new RefBook('Title', 2020, 3);
refBook2.printItem();
// console.log(refBook2);

// Task 05.04



const favoriteLibrarian: Librarian = new UniversityLibrarian();
favoriteLibrarian.name = 'Anna';
favoriteLibrarian.assistCustomer('Boris');


// Task 05.05

type PersonBook = Book & Person;

const personBook: PersonBook = {
	name: 'Anna',
	email: 'anna@gmail.com',
	title: 'Introdaction yo union types',
	available: true,
	author: 'Unknown',
	category: Category.TypeScript,
	id: 1,
};

// console.log(personBook);

type BookOrUndefined = Book | undefined;
