import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ForgetPasswordPage } from './forgot-password.page';

describe('ForgetPasswordPage', () => {
  let component: ForgetPasswordPage;
  let fixture: ComponentFixture<ForgetPasswordPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgetPasswordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
