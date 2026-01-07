import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsMain } from './about-us-main';

describe('AboutUsMain', () => {
  let component: AboutUsMain;
  let fixture: ComponentFixture<AboutUsMain>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutUsMain]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutUsMain);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
