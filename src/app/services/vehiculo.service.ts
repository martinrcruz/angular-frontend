import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  constructor(private http: HttpClient) { }
  apiUrl: string = environment.apiUrl;
  route: string = 'vehiculo';

  getVehiculo() {
    return this.http.get(`${this.apiUrl}${this.route}`)
  }
  getVehiculoById(id_vehiculo: any) {
    return this.http.get(`${this.apiUrl}${this.route}/` + id_vehiculo)
  }

  addVehiculo(vehiculoForm: any) {
    return this.http.post(`${this.apiUrl}${this.route}`, vehiculoForm)
  }

  updateVehiculo(vehiculoForm: any) {
    return this.http.put(`${this.apiUrl}${this.route}/`+ vehiculoForm.idVehiculo, vehiculoForm)
  }

  deleteVehiculo(id_vehiculo: any) {
    return this.http.delete(`${this.apiUrl}${this.route}/` + id_vehiculo)
  }

}
