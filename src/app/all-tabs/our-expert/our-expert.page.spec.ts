import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OurExpertPage } from './our-expert.page';

describe('OurExpertPage', () => {
  let component: OurExpertPage;
  let fixture: ComponentFixture<OurExpertPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OurExpertPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
