import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PaginaPage } from '../pagina/pagina';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  usuario: string="Hola";
  constructor(public navCtrl: NavController) {

  }

goToPagina() {
  this.navCtrl.push(PaginaPage);
}

}
