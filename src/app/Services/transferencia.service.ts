import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Extratos } from 'src/model/transferencia.model';

@Injectable({
  providedIn: 'root',
})
export class TransferenciaService {
  private listaTransferencia: any[];
  private url = 'http://localhost:3000/listaDeExtratos';

  constructor(private httpClient: HttpClient) {
    this.listaTransferencia = [];
  }

  get transferencias() {
    return this.listaTransferencia;
  }

  public todas(): Observable<Array<Extratos>> {
    return this.httpClient.get<Array<Extratos>>(this.url);
  }

  public adicionar(transferencia: any) {
    debugger;
    this.hidratar(transferencia);
    this.listaTransferencia.push(transferencia);
    console.log(this.listaTransferencia)
  }

  private hidratar(transferencia: any) {
    transferencia.data = new Date();
  }
}
