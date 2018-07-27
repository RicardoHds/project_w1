import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  minute1: number = Math.floor(Math.random() * 100);
  minute2: number = Math.floor(Math.random() * 100);
  minute3: number = Math.floor(Math.random() * 100);

  photos: object = [
    {
      title: 'Lofoten',
      description: 'This is a wider card with supporting text below as a natural lead-in to...',
      img: 'http://americanpreppersnetwork.com/wp-content/uploads/2014/11/LhotseMountain.jos_.500pix.jpg',
      update: this.minute1
    },
    {
      title: 'Mountains',
      description: 'This card has supporting text below as a natural...',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/AnnapurnaSouthMountain.jos.500pix.jpg/259px-AnnapurnaSouthMountain.jos.500pix.jpg',
      update: this.minute2
    },
    {
      title: 'Climbing',
      description: 'This is a wider card with supporting text below as a natural lead-in to additional content...',
      img: 'http://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Themistokles_von_Eckenbrecher_Raftsund_1906.jpeg/259px-Themistokles_von_Eckenbrecher_Raftsund_1906.jpeg',
      update: this.minute3
    }
  ];

  carousel: object = [
    {
      img: 'http://www.hotticketsforschools.com/wp-content/uploads/handsome-desert-spirit-lamp-minimalist-of-best-exploring-mongolias-gobi-desert-photograph.jpg',
      title: 'First slide label',
      description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
    },
    {
      img: 'http://fractalpanda.com/wp-content/uploads/2014/05/Minimal-800x400.jpg',
      title: 'Second slide label',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      img: 'https://www.maketecheasier.com/assets/uploads/2018/04/surf-feature-surfing-c.jpeg',
      title: 'Third slide label',
      description: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
