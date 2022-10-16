import { Component, VERSION } from '@angular/core';
import { Test } from './shared/enum/test-enum';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor() {
    console.log(Test.AccountAdmin);
  }
}
