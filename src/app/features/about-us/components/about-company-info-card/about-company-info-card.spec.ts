import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutCompanyInfoCard } from './about-company-info-card';

describe('AboutCompanyInfoCard', () => {
  let component: AboutCompanyInfoCard;
  let fixture: ComponentFixture<AboutCompanyInfoCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutCompanyInfoCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutCompanyInfoCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
