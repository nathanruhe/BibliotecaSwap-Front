import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibroBibliotecaComponent } from './libro-biblioteca.component';

describe('LibroBibliotecaComponent', () => {
  let component: LibroBibliotecaComponent;
  let fixture: ComponentFixture<LibroBibliotecaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LibroBibliotecaComponent]
    });
    fixture = TestBed.createComponent(LibroBibliotecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
