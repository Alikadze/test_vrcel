import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesBlock } from './services-block';

describe('ServicesBlock', () => {
  let component: ServicesBlock;
  let fixture: ComponentFixture<ServicesBlock>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesBlock]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesBlock);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
