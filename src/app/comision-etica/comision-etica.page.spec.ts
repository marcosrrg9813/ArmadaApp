import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComisionEticaPage } from './comision-etica.page';

describe('ComisionEticaPage', () => {
  let component: ComisionEticaPage;
  let fixture: ComponentFixture<ComisionEticaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComisionEticaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComisionEticaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
