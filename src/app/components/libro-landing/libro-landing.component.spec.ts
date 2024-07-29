import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibroLandingComponent } from './libro-landing.component';

describe('LibroLandingComponent', () => {
  let component: LibroLandingComponent;
  let fixture: ComponentFixture<LibroLandingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LibroLandingComponent]
    });
    fixture = TestBed.createComponent(LibroLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
