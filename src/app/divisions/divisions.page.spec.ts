import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DivisionsPage } from './divisions.page';

describe('DivisionsPage', () => {
  let component: DivisionsPage;
  let fixture: ComponentFixture<DivisionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DivisionsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivisionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
