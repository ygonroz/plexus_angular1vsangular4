import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {

  public valor: number;

  constructor() {
    this.valor = 10;
  }

  setValor(numero) {
    this.valor = numero;
  }

}
