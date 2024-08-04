import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRegistroComponent } from './form-registro.component';

describe('FormRegistroComponent', () => {
  let component: FormRegistroComponent;
  let fixture: ComponentFixture<FormRegistroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormRegistroComponent]
    });
    fixture = TestBed.createComponent(FormRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
