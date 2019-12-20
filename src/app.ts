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

function getAllBooks() {
	const books = [
		{ title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true, category: Category.JavaScript },
		{ title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false, category: Category.JavaScript },
		{ title: 'CSS Secrets', author: 'Lea Verou', available: true, category: Category.CSS },
		{ title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true, category: Category.JavaScript }
	] as const;

	return books;
}

function logFirstAvailable(books): void {
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

function getBookTitlesByCategory(category: Category): Array<string> {
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

// Task 02.01

logFirstAvailable(getAllBooks());

const titles = getBookTitlesByCategory(Category.JavaScript);
logBookTitles(titles);

const titleAndAuthor = getBookAuthorByIndex(2);

console.log(calcTotalPages());
