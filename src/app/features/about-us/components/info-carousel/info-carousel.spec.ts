import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCarousel } from './info-carousel';

describe('InfoCarousel', () => {
  let component: InfoCarousel;
  let fixture: ComponentFixture<InfoCarousel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoCarousel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoCarousel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
