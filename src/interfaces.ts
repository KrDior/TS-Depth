import { Category } from './enums';

interface Library {
	lib: string;
	books: number;
	avgPagesPerBook: number;
}

interface Book {
	id: number;
	title: string;
	author: string;
	available: boolean;
	category: Category;
	pages?: number;
	// markDamaged?: (reason: string) => void;
	markDamaged?: DamageLogger;
}

interface DamageLogger {
	(p: string): void;
}

interface Person {
	name: string;
	email: string;
}

interface Author extends Person {
	numBooksPublished: number;
}

interface Librarian extends Person {
	department: string;
	assistCustomer: (custName: string) => void;
}

interface Magazine {
	title: string;
	publisher: string;
}

interface ShelfItem {
	title: string;
}


export { Book, DamageLogger as Logger, Person, Author, Librarian, Magazine, ShelfItem };
