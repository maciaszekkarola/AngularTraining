import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';


@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {
  facts: Facts[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getJokes().subscribe((facts) => {
      this.facts = facts;
    });
  }
}

interface Facts {
  id: number;
  value: string;
  icon_url: string;
}
