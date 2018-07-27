import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  socialMedia: object[] = [
    {
      media: 'Facebook',
      url: 'facebook.com'
    },
    {
      media: 'Twiter',
      url: 'twitter.com'
    },
    {
      media: 'Behance',
      url: 'behance.com'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
