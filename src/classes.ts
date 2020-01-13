class ReferenceItem1 {
	title: string;
	year: number;

	constructor(newTitle: string, newYear: number) {
		console.log('Creating a new ReferenceItem');
		this.title = newTitle;
		this.year = newYear;
	}

	printItem(): void {
		console.log(`${this.title} was published in ${this.year}`);
	}
}

abstract class ReferenceItem {
	private _publisher: string;
	static department: string = 'Research Dep';

	get publisher(): string {
		return this._publisher.toLocaleUpperCase();
	}

	set publisher(newPublisher: string) {
		this._publisher = newPublisher;
	}

	constructor(public title: string, protected year: number) {
		console.log('Creating a new ReferenceItem');
	}

	printItem(): void {
		console.log(`${this.title} was published in ${this.year}`);
		console.log(`Department: ${ReferenceItem.department}`);
	}

	printCitation(): void {
		console.log(`${this.title}`);
	}
}

export { ReferenceItem, ReferenceItem1 };
