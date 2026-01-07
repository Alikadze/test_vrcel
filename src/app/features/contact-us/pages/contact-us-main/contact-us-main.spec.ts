import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUsMain } from './contact-us-main';

describe('ContactUsMain', () => {
  let component: ContactUsMain;
  let fixture: ComponentFixture<ContactUsMain>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactUsMain]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactUsMain);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
