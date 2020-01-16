import { ReferenceItem } from '../classes';
import { timeout, poritiveInteger } from '../decocators';


export default class Encyclopedia extends ReferenceItem {
	private _copies: number;

	@poritiveInteger
	get copies(): number {
		return this._copies;
	}

	set copies(value: number) {
		this._copies = value;
	}

	constructor(nweTitle: string, newYear: number, public edition: number) {
		super(nweTitle, newYear);
	}

	@timeout(2000)
	printItem(): void {
		super.printItem();
		console.log(`Edition: ${this.edition} ${this.year}`);
	}

}
