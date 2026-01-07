import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasesCard } from './cases-card';

describe('CasesCard', () => {
  let component: CasesCard;
  let fixture: ComponentFixture<CasesCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CasesCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CasesCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
