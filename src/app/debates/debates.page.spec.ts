import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebatesPage } from './debates.page';

describe('DebatesPage', () => {
  let component: DebatesPage;
  let fixture: ComponentFixture<DebatesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebatesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebatesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
