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

  @Input()
  transferencias: Array<transferencia> = [];

  constructor() { }

  ngOnInit() {
  }

}
