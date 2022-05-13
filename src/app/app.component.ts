import { Component } from '@angular/core';
import { tipoTransferencia } from './interfaces/tipo-transferencia.interface';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'primeiro-angular-alura';

  transferir($event: tipoTransferencia) {
    console.log($event);

  }
}
