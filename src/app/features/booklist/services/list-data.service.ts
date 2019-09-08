import { Book } from '../components/models';
import { BehaviorSubject } from 'rxjs';
export class ListDataService {
  private subject: BehaviorSubject<Book[]>;
  private currentId = 2;
  data: Book[] = [
    { id: '1', title: 'Hamlet', author: 'Shakespeare', format: 'Hardcover', onLoan: false },
    { id: '2', title: 'Oliver Twist', author: 'Charles Dickens', format: 'Paperback', onLoan: false },
    { id: '2', title: 'Pride and Prejudice', author: 'Jane Austen', format: 'E-Book', onLoan: false }
  ];

  constructor() {
    this.subject = new BehaviorSubject(this.data);
  }
  add(a: string, b: string, c: string) {
    const newBook: Book = {
      id: (this.currentId++).toString(),
      title: a,
      author: b,
      format: c,
      onLoan: false
    };
    this.data = [newBook, ...this.data];
    this.subject.next(this.data);
  }
  getData() {
    return this.subject.asObservable();
  }
}
