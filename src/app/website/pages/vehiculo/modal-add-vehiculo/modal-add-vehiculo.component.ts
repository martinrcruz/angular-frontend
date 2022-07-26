import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VehiculoService } from 'src/app/services/vehiculo.service';

@Component({
  selector: 'app-modal-add-vehiculo',
  templateUrl: './modal-add-vehiculo.component.html',
  styleUrls: ['./modal-add-vehiculo.component.scss']
})
export class ModalAddVehiculoComponent implements OnInit {

  @Output() refreshTable = new EventEmitter<string>();

  saveResponse: any;
  visible = false;

  constructor(
    private vehiculoService: VehiculoService
  ) { }

  ngOnInit(): void {
  }


  vehiculoForm = new FormGroup({
    nombre: new FormControl(),
    marca: new FormControl(),
    modelo: new FormControl(),

  })


  addVehiculo() {
    var obj = {
      nombre: this.vehiculoForm.get("nombre")?.value,
      marca: this.vehiculoForm.get("marca")?.value,
      modelo: this.vehiculoForm.get("modelo")?.value,
    }

    this.vehiculoService.addVehiculo(obj)
      .subscribe({
        next: (res) => {
          this.saveResponse = res;

          this.refreshTable.emit();
        },
        error: (err) => {
          console.log(this.vehiculoForm.getRawValue())
          this.saveResponse = err
        }
      })
  }
  openModal() {
    this.visible = !this.visible;
  }

  handleModalChange(event: any) {
    this.visible = event;
  }


}
