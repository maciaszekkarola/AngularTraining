import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  title: string;
  description = 'another option';
  isit = true;
  isHigh = true;
  isAvailable: boolean;
  text1 = 'desactivate';
  text2 = 'activated';
  text3: string;
  size: number;

  constructor() { }

  test(event) {
    this.isAvailable = !this.isAvailable;
    return this.text3 = (this.isAvailable) ? this.text2 : this.text1;
  }

  handleColor() {
    this.isit = !this.isit;
  }

  toggle($event) {
    this.isHigh = !this.isHigh;
  }

  ngOnInit() {
    this.text3 = 'click to activate';
    this.isAvailable = false;
    this.title = 'first option to display';
    this.size = 10;
  }

}
