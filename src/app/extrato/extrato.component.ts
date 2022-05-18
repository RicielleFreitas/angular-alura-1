import { Extratos } from './../../model/transferencia.model';
import { TransferenciaService } from './../Services/transferencia.service';
import { Component, OnInit } from '@angular/core';

interface transferencia {
  data: Date;
  valor: number;
  destino: number;
}

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss'],
})
export class ExtratoComponent implements OnInit {
  public transferencias: Array<Extratos> = [];

  constructor(private readonly service: TransferenciaService) {}

  public ngOnInit(): void {
    this.service.todas().subscribe((transferenciaResponse: Array<Extratos>) => {
      console.table(transferenciaResponse);
      this.transferencias = transferenciaResponse;
    });
  }
}
