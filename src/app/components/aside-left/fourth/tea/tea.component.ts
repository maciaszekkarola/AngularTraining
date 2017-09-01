import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tea',
  templateUrl: './tea.component.html',
  styleUrls: ['./tea.component.css']
})
export class TeaComponent implements OnInit {
  classes = {
    green: false,
    red: true,
    black: false,
    white: false
  };
  buttons = ['matcha', 'roybos', 'ceylon', 'china'];

  constructor() { }

  ngOnInit() {
  }

}
