import { Component, OnInit, OnDestroy, AfterContentInit } from '@angular/core';
import { FilterPipe } from '../../filter.pipe';

@Component({
  selector: 'app-element4',
  templateUrl: './element4.component.html',
  styleUrls: ['./element4.component.css'],
  // pipes: [FilterPipe]
})
export class Element4Component implements OnInit, OnDestroy, AfterContentInit {
  visible = true;
  text= 'welcome';
  names: string[] = [
    'kasia', 'basia', 'zosia', 'andrzej', 'angelika', 'kamil', 'zygmunt'
  ];

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

