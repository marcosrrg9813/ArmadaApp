import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DivisionPersonalPage } from './division-personal.page';

describe('DivisionPersonalPage', () => {
  let component: DivisionPersonalPage;
  let fixture: ComponentFixture<DivisionPersonalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DivisionPersonalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivisionPersonalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
