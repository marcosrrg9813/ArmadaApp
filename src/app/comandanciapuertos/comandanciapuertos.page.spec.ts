import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComandanciapuertosPage } from './comandanciapuertos.page';

describe('ComandanciapuertosPage', () => {
  let component: ComandanciapuertosPage;
  let fixture: ComponentFixture<ComandanciapuertosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComandanciapuertosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComandanciapuertosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
