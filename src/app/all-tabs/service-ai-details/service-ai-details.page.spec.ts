import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServiceAiDetailsPage } from './service-ai-details.page';

describe('ServiceAiDetailsPage', () => {
  let component: ServiceAiDetailsPage;
  let fixture: ComponentFixture<ServiceAiDetailsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceAiDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
