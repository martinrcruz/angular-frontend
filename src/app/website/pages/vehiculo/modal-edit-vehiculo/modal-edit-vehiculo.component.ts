import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VehiculoService } from 'src/app/services/vehiculo.service';

@Component({
  selector: 'app-modal-edit-vehiculo',
  templateUrl: './modal-edit-vehiculo.component.html',
  styleUrls: ['./modal-edit-vehiculo.component.scss']
})
export class ModalEditVehiculoComponent implements OnInit {

  @Output() refreshTable = new EventEmitter<string>();

  visible = false;
  errorMessage: string = '';
  errorClass: string | any = '';
  saveResponse: any;
  editData: any;

  constructor(private vehiculoService: VehiculoService) { }

  ngOnInit(): void {
  }


  vehiculoForm = new FormGroup({
    idVehiculo: new FormControl(),
    nombre: new FormControl(),
    marca: new FormControl(),
    modelo: new FormControl(),

  })

  loadData(idVehiculo: any) {

    this.vehiculoService.getVehiculoById(idVehiculo)
      .subscribe({
        next: (res) => {
          this.editData = res;
          this.vehiculoForm.setValue({
            idVehiculo: this.editData.idVehiculo,
            nombre: this.editData.nombre,
            marca: this.editData.marca,
            modelo: this.editData.modelo,

          })

        },
        error: (err) => {
          alert('cant do that')
        }
      })
  }


  updateVehiculo() {

    var obj = {
      idVehiculo: this.vehiculoForm.get("idVehiculo")?.value,
      nombre: this.vehiculoForm.get("nombre")?.value,
      marca: this.vehiculoForm.get("marca")?.value,
      modelo: this.vehiculoForm.get("modelo")?.value,
    }
    this.vehiculoService.updateVehiculo(obj)
      .subscribe({
        next: (res) => {
          this.saveResponse = res;
          console.log('good')
          this.refreshTable.emit();
        },
        error: (err) => {
          console.log(this.vehiculoForm.getRawValue())
          this.saveResponse = err
          console.log('error')
        }
      })

  }



  openModal() {
    this.visible = !this.visible;
  }

  handleModalChange(event: any) {
    this.visible = event;
    console.log('evento')
  }

}
