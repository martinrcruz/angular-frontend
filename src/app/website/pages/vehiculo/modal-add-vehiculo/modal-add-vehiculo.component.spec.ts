import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddVehiculoComponent } from './modal-add-vehiculo.component';

describe('ModalAddVehiculoComponent', () => {
  let component: ModalAddVehiculoComponent;
  let fixture: ComponentFixture<ModalAddVehiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAddVehiculoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAddVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
