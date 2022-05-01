import { Component } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {

  public text = 'cu de cana';

  Transferir() {
    console.log('Solicitada nova Transferência');
  }
}
