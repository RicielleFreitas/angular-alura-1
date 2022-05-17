import { TransferenciaService } from './../Services/transferencia.service';
import { Component, Input, OnInit } from '@angular/core';

interface transferencia {
  data: Date;
  valor: number;
  destino: number;
}

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {


  transferencias: Array<transferencia> = [];

  constructor(private service: TransferenciaService) {

   }

  ngOnInit() {
       this.transferencias = this.service.transferencias;
  }

}
