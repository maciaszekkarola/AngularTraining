import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  links: [string, string][] = [
    ['placeholder Api', '/elemen1'],
    ['bootstrap stuff ', '/elemen2'],
    ['pics ', '/elemen3'],
    ['onDestroy ', '/elemen4'],
  ];
  constructor(){}

  hover(event) {
  event = event.target;
  event.classList.toggle('coloured');
  }

}
