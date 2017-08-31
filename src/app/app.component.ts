import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  links: [string, string][] = [
    ['placeholder Api', '/'],
    ['bootstrap stuff ', '/element2'],
    ['pics ', '/element3'],
    ['onDestroy ', '/element4'],
  ];
  constructor(){}

  hover(event) {
  event = event.target;
  event.classList.toggle('coloured');
  }

}
