import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery' ;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  isDisabled = true;

  constructor() { }

  ngOnInit() {
    console.log('I\'ve been Initialized');
  }

  buttonClicked(): void {
    alert('Hello World');
  }

}
