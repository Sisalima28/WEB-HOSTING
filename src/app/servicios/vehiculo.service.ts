import { Injectable } from '@angular/core';
import { Vehiculo } from '../modelos/vehiculos.model';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  constructor() { }

  private vehiculos:Vehiculo[] = [
    {
      imagen:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3ngUbY7s-8LiAhTa6oOHlx68ZSiHW5RlSAg&s',
      marca:'Mazda',
      modelo:'MX-5 Miata 2024',
      anio:2024,
      color:'Rojo Soul Crystal Metallic',
      velocidad:'220 km/h',
      descripcion:'El Mazda MX-5 Miata 2024 sigue siendo uno de los roadsters más ligeros y emocionantes de conducir en el mercado. Este modelo presenta un diseño exterior refinado, con líneas fluidas y elegantes que mantienen la clásica silueta del Miata, pero con un toque moderno y deportivo.'
    },
    {
      imagen:'https://i.redd.it/2024-camaro-zl1-panther-edition-for-sale-v0-f690ez7lb0hc1.jpg?width=4032&format=pjpg&auto=webp&s=ab636cea9bc81bd9454c7b5904daff09afe78dc2',
      marca:'Chevrolet',
      modelo:'Camaro ZL1 2024',
      anio:2024,
      color:'Negro Mosaico Metálico',
      velocidad:'318 km/h',
      descripcion:'El Camaro ZL1 2024 es la versión más radical de este muscle car americano. Bajo el capó se encuentra un motor V8 de 6.2 litros sobrealimentado, capaz de generar 650 caballos de fuerza y 650 lb-pie de torque.'
    },
    {
      imagen:'https://images.dealer.com/ddc/vehicles/2024/Lamborghini/Revuelto/Coupe/color/Verde%20Copreo%20Matt-VCOP-106,164,51-640-en_US.jpg',
      marca:'Lamborghini',
      modelo:'Revuelto 2024',
      anio:2024,
      color:'Verde Mantis',
      velocidad:'350 km/h',
      descripcion:'El Lamborghini Revuelto 2024 es el sucesor del Aventador, representando una nueva era para la marca con un enfoque híbrido en su tren motriz. Este superdeportivo cuenta con un motor V12 atmosférico de 6.5 litros, que genera unos impresionantes 814 caballos de fuerza.'
    },
    {
      imagen:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZthKp-gDi45SORnR3vt3_7R5TYd7Kr0mEAg&s',
      marca:'Ford',
      modelo:'Mustang Dark Horse 2024',
      anio:2024,
      color:'Azul Ember Metallic',
      velocidad:'275 km/h',
      descripcion:'El Ford Mustang Dark Horse 2024 es la versión más avanzada y orientada al rendimiento de la nueva generación del Mustang. Este modelo lleva el icónico pony car a un nuevo nivel, combinando potencia, precisión y tecnología de última generación.'
    }
  ]

  getVehiculos(){
    return this.vehiculos;
  }
}
