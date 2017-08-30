import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-aside-left',
  templateUrl: './aside-left.component.html',
  styleUrls: ['./aside-left.component.css']
})
export class AsideLeftComponent implements OnInit {
  hover = false;
  color = '#0c563f';
  links: [string, string][] = [
    ['first', '/first'],
    ['second', '/second'],
    ['third', '/third'],
    ['fourth', '/fourth'],
  ];

  constructor() { }

  // hovering(event) {
  //   event.preventDefault();
  //   event = event.target;
  //   if (this.hover === true) {
  //     this.hover = false;
  //     this.color = '#0c563f';
  //   } else {
  //     this.hover = true;
  //     this.color = 'green';
  //   }
  //   console.log(event + this);
  // }


  // second version

  hovering(event) {
    event = event.target;
    if (this.hover === false) {
      this.links.forEach(link => {
        //
        this.hover = true;
        this.color = 'green';
        // console.log(link);
      });
    }else {
      this.hover = false;
      this.color = '#0c563f';
    }

    console.log(event);
  }


  ngOnInit() {
    console.log('aside-left component called');
  }

}
