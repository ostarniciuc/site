  import { Component } from '@angular/core';
  import {TutorialsComponent} from './tutorials.component';

@Component({
  selector: 'my-app',
  template: `<h1>Hello World from Chisinau <Header></Header> </h1>
             <h4> Header 4 form App Component </h4>
              <my-tutorials></my-tutorials>`,
    styles: [`h4 {
        color: darkslategrey;
       }`]

  directives: [TutorialsComponent]
})
export class AppComponent { }
