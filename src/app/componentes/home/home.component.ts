import { Component } from '@angular/core';
import { Vehiculo } from '../../modelos/vehiculos.model';
import { VehiculoService } from '../../servicios/vehiculo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  vehiculos:Vehiculo[]=[];

  constructor(private _vehiculosService:VehiculoService){}

  ngOnInit():void{
    this.vehiculos=this._vehiculosService.getVehiculos();
  }
}
