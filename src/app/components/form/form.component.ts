import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  person = {
    name: 'Karolina',
    surname: 'Es',
    age: 27
  };

  constructor() { }

  ngOnInit() {
  }

}
