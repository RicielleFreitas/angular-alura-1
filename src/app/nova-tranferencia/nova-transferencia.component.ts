
import { Component, Output,EventEmitter } from '@angular/core';
import { tipoTransferencia } from '../interfaces/tipo-transferencia.interface';


@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})

export class NovaTransferenciaComponent {
  @Output() aoTransferir = new EventEmitter<tipoTransferencia>();

  valor!: number;
  destino!: number;

  constructor() {}


  Transferir() {
    console.log('Solicitada nova Transferência');
    const valorEmitir: tipoTransferencia = {valor: this.valor, destino:this.destino}
    this.aoTransferir.emit(valorEmitir);
  }
}
