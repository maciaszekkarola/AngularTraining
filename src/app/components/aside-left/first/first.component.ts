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

  constructor() { }

  handleColor() {
    this.isit = !this.isit;
  }

  toggle($event) {
    this.isHigh = !this.isHigh;
  }

  ngOnInit() {
    this.title = 'first option to display';
  }

}
