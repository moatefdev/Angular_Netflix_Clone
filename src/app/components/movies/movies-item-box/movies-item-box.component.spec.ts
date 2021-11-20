import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesItemBoxComponent } from './movies-item-box.component';

describe('MoviesItemBoxComponent', () => {
  let component: MoviesItemBoxComponent;
  let fixture: ComponentFixture<MoviesItemBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesItemBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesItemBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
