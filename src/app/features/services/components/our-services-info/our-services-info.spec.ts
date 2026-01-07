import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurServicesInfo } from './our-services-info';

describe('OurServicesInfo', () => {
  let component: OurServicesInfo;
  let fixture: ComponentFixture<OurServicesInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurServicesInfo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurServicesInfo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
