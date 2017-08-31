import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-element1',
  templateUrl: './element1.component.html',
  styleUrls: ['./element1.component.css']
})
export class Element1Component implements OnInit {
  posts: Post[];
  button1 = false;
  button2 = false;
  button3 = false;

  constructor(private dataService: DataService) { }

  getFirst(event) {
    console.log(this.button1);
    this.button1 = !this.button1;
    this.button2 = false;
    this.button3 = false;
  }

  getTitles(event) {
    console.log(this.button2);
    this.button2 = !this.button2;
    this.button1 = false;
    this.button3 = false;

  }
  getRecent(event) {
    console.log(this.button3);
    this.button3 = !this.button3;
    this.button2 = false;
    this.button1 = false;
  }

  ngOnInit() {
    this.dataService.getPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }
}

interface Post {
  id: number;
  title: string;
  body: string;
}
