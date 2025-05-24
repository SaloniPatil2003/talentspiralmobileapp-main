import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterSecondPage } from './register-second.page';

describe('RegisterSecondPage', () => {
  let component: RegisterSecondPage;
  let fixture: ComponentFixture<RegisterSecondPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterSecondPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
