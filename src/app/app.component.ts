import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery' ;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Enhanced Angular App';
  isDisabled = false;

  constructor() { }

  ngOnInit() {
    console.log('I\'ve been Initialized');
  }

  disableMe(): void {
    this.isDisabled = true;
    console.log('Button clicked');
  }

}
