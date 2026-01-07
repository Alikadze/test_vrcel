import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyDescription } from './company-description';

describe('CompanyDescription', () => {
  let component: CompanyDescription;
  let fixture: ComponentFixture<CompanyDescription>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyDescription]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyDescription);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
