import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DigitalMarketingDetailsPage } from './digital-marketing-details.page';

describe('DigitalMarketingDetailsPage', () => {
  let component: DigitalMarketingDetailsPage;
  let fixture: ComponentFixture<DigitalMarketingDetailsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalMarketingDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
