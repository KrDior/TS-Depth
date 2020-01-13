import { ReferenceItem } from '../classes';


export default class extends ReferenceItem {
	constructor(nweTitle: string, newYear: number, public edition: number) {
		super(nweTitle, newYear);
	}

	printItem(): void {
		super.printItem();
		console.log(`Edition: ${this.edition} ${this.year}`);
	}


}
