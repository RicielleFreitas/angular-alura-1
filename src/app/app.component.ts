import { Component } from '@angular/core';
import { tipoTransferencia } from './interfaces/tipo-transferencia.interface';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'primeiro-angular-alura';
  transferencias: any[] = [];

  transferir($event: any) {
    console.log($event);
    const transerencia = {...$event, data: new Date()}
    this.transferencias.push(transerencia);
  }
}
