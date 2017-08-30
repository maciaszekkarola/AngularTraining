import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside-right',
  templateUrl: './aside-right.component.html',
  styleUrls: ['./aside-right.component.css']
})
export class AsideRightComponent implements OnInit {
  right: string;

  constructor() { }

  ngOnInit() {
    this.right = 'right column is loaded!';
  }

}
