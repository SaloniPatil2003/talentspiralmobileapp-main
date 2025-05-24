import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TermConditionPage } from './term-condition.page';

describe('TermConditionPage', () => {
  let component: TermConditionPage;
  let fixture: ComponentFixture<TermConditionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TermConditionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
