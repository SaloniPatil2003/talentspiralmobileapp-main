import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchInternshipPage } from './search-internship.page';

describe('SearchInternshipPage', () => {
  let component: SearchInternshipPage;
  let fixture: ComponentFixture<SearchInternshipPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchInternshipPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
