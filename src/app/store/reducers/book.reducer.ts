import { createReducer, on, Action } from '@ngrx/store';
import { Book } from 'src/app/models/book.model';
import * as BookActions from '../actions/book.actions';

export interface BookState {
  books: Book[];
}

export const initialBookState: BookState = {
  books: [],
};

export const bookReducer = createReducer(
  initialBookState,
  on(BookActions.addBook, (state, { book }) => ({
    ...state,
    books: [...state.books, book],
  })),
  on(BookActions.removeBook, (state, { book }) => ({
    ...state,
    books: state.books.filter((b) => b.id !== book.id),
  }))
);

export function reducer(state: BookState | undefined, action: Action) {
  return bookReducer(state, action);
}
