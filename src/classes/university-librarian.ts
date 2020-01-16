import { Librarian } from '../interfaces';
import { sealed, logger, writable, logMethod, logParameters, format } from '../decocators';

@logger
@sealed('UniversityLibrarian')
export class UniversityLibrarian implements Librarian {
	@format() name: string;
	email: string;
	department: string;

	@logMethod
	assistCustomer(@logParameters custName: string): void {
		console.log(`${this.name} is assisting ${custName}`);
	}

	@writable(true)
	assistFaculty(): void {
		console.log('Assisting faculity');
	}

	@writable(false)
	teachCommunity(): void {
		console.log('Teachingcommunity');
	}
}
