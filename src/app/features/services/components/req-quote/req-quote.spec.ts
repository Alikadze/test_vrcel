import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReqQuote } from './req-quote';

describe('ReqQuote', () => {
  let component: ReqQuote;
  let fixture: ComponentFixture<ReqQuote>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReqQuote]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReqQuote);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
