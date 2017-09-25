import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SharedService } from 'app/routes/catalogo/service/shared.service';
import { Elemento } from '../_data/elemento.model';

@Component({
  selector: 'cat-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  @Input() public busqueda: string;
  @Output() public busquedaChange: EventEmitter<string> = new EventEmitter<string>();
  @Output() public callback: EventEmitter<any> = new EventEmitter<any>();
  public elements: Elemento[];

  constructor(
    public sharedService: SharedService
  ) { }

  ngOnInit() {
    this.getElementList();
  }

  getElementList() {
    this.sharedService
      .getElements$()
      .subscribe(elements => this.elements = elements);
  }

  onBusqueda() {
    this.busquedaChange.emit(this.busqueda);
  }

  onCallback() {
    this.callback.emit();
  }

  onDelete(element) {
    this.sharedService
      .deleteElement$(element)
      .subscribe(r => this.getElementList());
  }

}
