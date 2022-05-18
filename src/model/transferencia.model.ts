export interface ExtratosResponse {
 listaDeExtratos: Array<Extratos>;
}


export interface Extratos {
  id?: string;
  valor: number;
  destino: string;
  data?: Date;
}
