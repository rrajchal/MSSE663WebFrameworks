import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from "./app.component";
import {AppRoutingModule} from "./app-routing.module";
import {HomeComponent} from "./home/home.component";
import {PizzaAppComponent} from "./pizza-app/pizza-app.component";
import {SizePipe} from "./shared/pipes/SizePipe/size.pipe";

@NgModule({
    declarations: [AppComponent, HomeComponent, PizzaAppComponent, SizePipe],
    imports: [BrowserModule, AppRoutingModule],
    bootstrap: [AppComponent]
})
export class AppModule { }
