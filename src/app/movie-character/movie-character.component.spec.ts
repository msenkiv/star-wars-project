import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCharacterComponent } from './movie-character.component';

describe('MovieCharacterComponent', () => {
  let component: MovieCharacterComponent;
  let fixture: ComponentFixture<MovieCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieCharacterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
