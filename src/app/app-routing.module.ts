import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehiculoComponent } from './website/pages/vehiculo/vehiculo.component';

const routes: Routes = [{
  path: 'vehiculo',
  component: VehiculoComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
