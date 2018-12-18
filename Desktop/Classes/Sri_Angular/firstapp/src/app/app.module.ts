import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BookComponent } from './books.component';

@NgModule({

    // All Modules
    imports: [
        BrowserModule
     ],

    // All Components Pipe
    declarations: [
        AppComponent,
        BookComponent
    ],

    // Only First component
    bootstrap: [
        AppComponent
     ],

    // All Services
    providers: [ ]
})

export class AppModule {

}
