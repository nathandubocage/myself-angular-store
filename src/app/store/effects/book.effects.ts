import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';

@Injectable()
export class BookEffects {
  constructor(private actions$: Actions) {}
}
