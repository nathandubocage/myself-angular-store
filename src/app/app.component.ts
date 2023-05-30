import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addBook } from './store/actions/book.actions';
import { Observable } from 'rxjs';
import { Book } from './models/book.model';
import { selectAllBooks } from './store/selectors/book.selectors';
import { AppState } from './models/app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public books$: Observable<Book[]> | undefined;

  public constructor(private store: Store<AppState>) {}

  public ngOnInit(): void {
    this.store.dispatch(
      addBook({
        book: {
          id: 1,
          title: 'The Lord of the Rings',
          author: 'J.R.R. Tolkien',
        },
      })
    );

    this.store.dispatch(
      addBook({
        book: {
          id: 2,
          title: 'The Hobbit',
          author: 'J.R.R. Tolkien',
        },
      })
    );

    this.books$ = this.store.select(selectAllBooks);
  }

  public addBook(): void {
    this.store.dispatch(
      addBook({
        book: {
          id: 3,
          title: 'The Silmarillion',
          author: 'J.R.R. Tolkien',
        },
      })
    );
  }
}
