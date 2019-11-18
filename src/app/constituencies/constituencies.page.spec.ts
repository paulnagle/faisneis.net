import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstituenciesPage } from './constituencies.page';

describe('ConstituenciesPage', () => {
  let component: ConstituenciesPage;
  let fixture: ComponentFixture<ConstituenciesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstituenciesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstituenciesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
