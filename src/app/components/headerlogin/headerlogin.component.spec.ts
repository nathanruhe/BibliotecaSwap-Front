import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderloginComponent } from './headerlogin.component';

describe('HeaderloginComponent', () => {
  let component: HeaderloginComponent;
  let fixture: ComponentFixture<HeaderloginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderloginComponent]
    });
    fixture = TestBed.createComponent(HeaderloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
