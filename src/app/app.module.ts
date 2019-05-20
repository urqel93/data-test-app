import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './components/app/app.component';
import {HeaderModule} from './shared-modules/header/header.module';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {HttpClientModule} from '@angular/common/http';
import {EffectsModule} from '@ngrx/effects';
import {usersReducer} from './state/user/users.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    HeaderModule,
    StoreModule.forRoot({users: usersReducer}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      name: 'DataWalk Test App DevTools',
      maxAge: 25,

    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
