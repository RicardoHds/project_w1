import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostFridayComponent } from './post-friday.component';

describe('PostFridayComponent', () => {
  let component: PostFridayComponent;
  let fixture: ComponentFixture<PostFridayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostFridayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostFridayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
