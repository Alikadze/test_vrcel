import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUsBlock } from './contact-us-block';

describe('ContactUsBlock', () => {
  let component: ContactUsBlock;
  let fixture: ComponentFixture<ContactUsBlock>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactUsBlock]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactUsBlock);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
