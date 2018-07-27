import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostMondayComponent } from './post-monday.component';

describe('PostMondayComponent', () => {
  let component: PostMondayComponent;
  let fixture: ComponentFixture<PostMondayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostMondayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostMondayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
