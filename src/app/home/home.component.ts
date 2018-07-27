import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  minute: Number;

  constructor() { }

  ngOnInit() {
  }

  getMinute() {
    this.minute = Math.floor(Math.random() * 100);
    return this.minute;
  }

}
