import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public edadUno=""
  public edadDos=""
  public suma:number = 0
  public promedio:number = 0
  public Calcular():any
  {
    this.suma = Number(this.edadUno) + Number(this.edadDos)

    this.promedio = this.suma/2
  }

  public Limpiar() :any
  {
    this.edadDos = ""
    this.edadUno = ""
    this.promedio = 0
    this.suma = 0
  }

}
