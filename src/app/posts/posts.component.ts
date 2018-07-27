import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  statusMonday = false;
  statusFriday = false;

  constructor() { }

  ngOnInit() {
    this.statusMonday = !this.statusMonday;
  }

  focusMonday() {
    this.statusMonday = !this.statusMonday;
    console.log(this.statusMonday);
    this.statusFriday = false;
  }

  focusFriday() {
    this.statusFriday = !this.statusFriday;
    this.statusMonday = false;
  }

}
