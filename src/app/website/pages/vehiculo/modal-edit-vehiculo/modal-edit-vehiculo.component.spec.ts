import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditVehiculoComponent } from './modal-edit-vehiculo.component';

describe('ModalEditVehiculoComponent', () => {
  let component: ModalEditVehiculoComponent;
  let fixture: ComponentFixture<ModalEditVehiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEditVehiculoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEditVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
