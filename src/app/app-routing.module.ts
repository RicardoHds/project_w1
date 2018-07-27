import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PhotosComponent } from './photos/photos.component';
import { PostsComponent } from './posts/posts.component';
import { PostMondayComponent } from './post-monday/post-monday.component';
import { PostFridayComponent } from './post-friday/post-friday.component';
import { ReviewsComponent } from './reviews/reviews.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'photos', component: PhotosComponent},
  {path: 'reviews', component: ReviewsComponent},
  {path: 'posts', component: PostsComponent, children: [
    {path: 'monday', component: PostMondayComponent},
    {path: 'friday', component: PostFridayComponent}
  ]},
  {path: '**', pathMatch: 'full', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
