import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisteionicPage } from './registeionic.page';

describe('RegisteionicPage', () => {
  let component: RegisteionicPage;
  let fixture: ComponentFixture<RegisteionicPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisteionicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
