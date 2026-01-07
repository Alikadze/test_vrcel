import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUsInfo } from './contact-us-info';

describe('ContactUsInfo', () => {
  let component: ContactUsInfo;
  let fixture: ComponentFixture<ContactUsInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactUsInfo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactUsInfo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
