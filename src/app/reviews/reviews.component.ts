import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  name: string;
  comment: string;
  review: object;
  comments = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];

  getReview() {
    return this.comments;
  }
  constructor() { }

  ngOnInit() {
  }


  addComment(newComment: string) {
    if (newComment) {
      this.comments.push(newComment);
    }
  }

}
