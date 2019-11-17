import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegislationPage } from './legislation.page';

describe('LegislationPage', () => {
  let component: LegislationPage;
  let fixture: ComponentFixture<LegislationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegislationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegislationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
