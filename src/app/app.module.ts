import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppComponent } from './app.component';
import { bookReducer } from './store/reducers/book.reducer';
import { BookEffects } from './store/effects/book.effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ book: bookReducer }),
    EffectsModule.forRoot([BookEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
