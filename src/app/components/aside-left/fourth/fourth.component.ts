import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fourth',
  templateUrl: './fourth.component.html',
  styleUrls: ['./fourth.component.css']
})
export class FourthComponent implements OnInit {
  links: [string, string][] = [
    ['/fourth/coffe', 'coffe time'],
    ['/fourth/tea', 'tea time'],
  ];

  constructor() { }

  ngOnInit() {
  }

}
