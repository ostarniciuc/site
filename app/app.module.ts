import {NgModule}      from '@angular/core';
import { FormsModule } from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent}   from './app.component';
import {TutorialsComponent}   from './tutorials.component';
import {HeaderComponent}   from './header.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        TutorialsComponent,
        HeaderComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
