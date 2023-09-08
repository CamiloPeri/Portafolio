import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonSolidComponent } from './button-solid.component';

describe('ButtonSolidComponent', () => {
  let component: ButtonSolidComponent;
  let fixture: ComponentFixture<ButtonSolidComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonSolidComponent]
    });
    fixture = TestBed.createComponent(ButtonSolidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
