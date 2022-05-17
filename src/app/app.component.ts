import { TransferenciaService } from './Services/transferencia.service';
import { Component } from '@angular/core';
import { tipoTransferencia } from './interfaces/tipo-transferencia.interface';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  [x: string]: any;
  title = 'primeiro-angular-alura';

  constructor(private service: TransferenciaService){

  }


  transferir($event: any) {
    this['service'].adicionar($event);

  }
}
