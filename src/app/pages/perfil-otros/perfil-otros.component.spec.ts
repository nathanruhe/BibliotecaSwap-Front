import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilOtrosComponent } from './perfil-otros.component';

describe('PerfilOtrosComponent', () => {
  let component: PerfilOtrosComponent;
  let fixture: ComponentFixture<PerfilOtrosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerfilOtrosComponent]
    });
    fixture = TestBed.createComponent(PerfilOtrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
