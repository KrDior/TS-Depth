showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
	const elt = document.getElementById(divName);
	elt.innerText = `Hello from ${name}`;
}

enum Category { JavaScript, CSS, HTML, TypeScript, Angular }

interface Book {
	title: string;
	author: string;
	available: boolean;
	category: number;
}

function getAllBooks(): ReadonlyArray<any> {
	const books = [
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

interface Library {
	lib: string;
	books: number;
	avgPagesPerBook: number;
}

function calcTotalPages(): bigint {
	const data = [
		{ lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 },
		{ lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 },
		{ lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 }
	] as const;

	const result = data.reduce((acc: bigint, obj: Library) => {
		return acc + BigInt(obj.books * obj.avgPagesPerBook);
	}, 0n);

	return result;
}

function getBookById(id: number): any {
	const books = getAllBooks();

	return books.find((book: any) => book.id === id);
}

function createCustomerId(name: string, id: number): string {
	return `${name}${id}`;
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

function assertStringValue(value: any): asserts value is string {
	if (typeof value !== 'string') {
		throw new Error('value should have been a string');
	}
}

function bookTitleTransform(title: string): string {
	assertStringValue(title);

	return [...title].reverse().join('');
}

console.log(bookTitleTransform('string'));
console.log(bookTitleTransform(''));
