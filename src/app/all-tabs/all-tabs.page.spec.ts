import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AllTabsPage } from './all-tabs.page';

describe('AllTabsPage', () => {
  let component: AllTabsPage;
  let fixture: ComponentFixture<AllTabsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AllTabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
