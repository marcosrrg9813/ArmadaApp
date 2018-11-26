import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadosPage } from './estados.page';

describe('EstadosPage', () => {
  let component: EstadosPage;
  let fixture: ComponentFixture<EstadosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
