import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InternshipsPage } from './internships.page';

describe('InternshipsPage', () => {
  let component: InternshipsPage;
  let fixture: ComponentFixture<InternshipsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InternshipsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
