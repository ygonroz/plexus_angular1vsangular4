import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SharedService } from 'app/routes/catalogo/service/shared.service';

@Component({
  selector: 'cat-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  @Input() public busqueda: string;
  @Output() public busquedaChange: EventEmitter<string> = new EventEmitter<string>();
  @Output() public callback: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    public sharedService: SharedService
  ) { }

  ngOnInit() {
    console.log(this.sharedService.valor);
    this.sharedService.setValor(15);
  }

  onBusqueda() {
    console.log('estoy');
    this.busquedaChange.emit(this.busqueda);
  }

  onCallback() {
    this.callback.emit();
  }

}
