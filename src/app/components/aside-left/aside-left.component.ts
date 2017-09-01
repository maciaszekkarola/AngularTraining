import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-aside-left',
  templateUrl: './aside-left.component.html',
  styleUrls: ['./aside-left.component.css']
})
export class AsideLeftComponent implements OnInit {
  hover = false;
  color = '#0c563f';
    // wielowymiarowa tablica, pierwszy string okresla nazwe linka, a drugi scieżkę
  // zastosowanie <a routerLink = "{{link[1]}}">{{link[0]}}</a>
  links: [string, string][] = [
    ['class field', '/first'],
    ['articles', '/second'],
    ['Chuck Api', '/third'],
    ['yet no idea', '/fourth'],
  ];

  constructor() { }

  hovering(event) {
    event = event.target;
    event.classList.toggle('coloured');
  }


  ngOnInit() {
  }

}
