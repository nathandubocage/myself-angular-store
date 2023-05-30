import { createSelector } from '@ngrx/store';
import { BookState } from '../reducers/book.reducer';
import { AppState } from 'src/app/models/app.model';

export const selectFeature = (state: AppState) => state.book;

export const selectAllBooks = createSelector(
  selectFeature,
  (state: BookState) => state.books
);
