import { Component, OnInit, OnDestroy, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-element4',
  templateUrl: './element4.component.html',
  styleUrls: ['./element4.component.css']
})
export class Element4Component implements OnInit, OnDestroy, AfterContentInit {
  visible = true;
  text= 'welcome';

  constructor() { }
  getAlert() {
    return alert('you have left the last tab');
  }

  toggleTemplate() {
    this.visible = !this.visible;
  }

  ngOnInit() {
    console.log('on init is called');
  }

  ngAfterContentInit() {
    console.log('after content loaded');
  }

  ngOnDestroy() {
    console.log('on destroy called');
    this.getAlert();
  }

}
