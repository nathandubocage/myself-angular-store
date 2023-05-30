import { createAction, props } from '@ngrx/store';
import { Book } from 'src/app/models/book.model';

export const addBook = createAction('[Book] Add Book', props<{ book: Book }>());

export const removeBook = createAction(
  '[Book] Remove Book',
  props<{ book: Book }>()
);
