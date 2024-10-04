import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PizzaCreatorComponent } from './pizza-app/components/pizza-creator/pizza-creator.component';
import { PizzaSizeComponent } from './pizza-app/components/pizza-size/pizza-size.component';
import { PizzaSummaryComponent } from './pizza-app/components/pizza-summary/pizza-summary.component';
import { PizzaToppingsComponent } from './pizza-app/components/pizza-toppings/pizza-toppings.component';
import { PizzViewerComponent } from './pizza-app/components/pizza-viewer/pizza-viewer.component';
import { PizzaAppComponent } from './pizza-app/pizza-app.component';
import { NavBarComponent } from './shared/components/nav-bar.component';
import { SizePipe } from './shared/pipes/size.pipe';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { PizzasEffects, reducer } from './pizza-app/state';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    PizzaAppComponent,
    PizzViewerComponent,
    PizzaCreatorComponent,
    PizzaSizeComponent,
    PizzaToppingsComponent,
    PizzaSummaryComponent,
    SizePipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot(
      { pizzas: reducer },
      {
        metaReducers: !environment.production ? [] : [],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true,
        },
      }
    ),
    EffectsModule.forRoot([PizzasEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
