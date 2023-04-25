import { Component, OnInit } from '@angular/core';
import { Pill } from 'src/app/shared/model/Pill';
import { PillService } from 'src/app/services/pill.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  pill: Pill[] = [];
  constructor(private api: PillService) {
    this.pill = api.getAll();
  }
  ngOnInit() {}
}
