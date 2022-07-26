import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { VehiculoService } from 'src/app/services/vehiculo.service';
import { ModalEditVehiculoComponent } from './modal-edit-vehiculo/modal-edit-vehiculo.component';


@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.scss']
})
export class VehiculoComponent implements OnInit {


  @ViewChild(MatPaginator) paginator: any = MatPaginator;
  @ViewChild(MatSort) sort: any = MatSort;
  @ViewChild(ModalEditVehiculoComponent) editView!: ModalEditVehiculoComponent;

  displayedColumns: string[] = ['idVehiculo', 'nombre', 'marca', 'modelo', 'editar', 'eliminar'];

  dataSource: any

  constructor(private vehiculoService: VehiculoService) { }

  ngOnInit(): void {
    this.getVehiculo();
  }

  getVehiculo() {
    this.vehiculoService.getVehiculo()
      .subscribe({
        next: (res) => {
          var data = Object.create(res);
          this.dataSource = new MatTableDataSource(data);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          console.log('esta bueno')

        },
        error: (err) => {
          console.log('esta malo')

        }
      })
  }

  refreshTable() {
    this.getVehiculo();
  }


  updateVehiculo(id_vehiculo: any) {
    this.editView.loadData(id_vehiculo)
  }

  deleteVehiculo(idVehiculo: any) {
    this.vehiculoService.deleteVehiculo(idVehiculo)
      .subscribe({
        next: (res) => {
          this.getVehiculo()
          alert("deleted successfully");

        },
        error: (err) => {
          console.log(err)
          alert('Error deleting')
        }
      })
  }


  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}


