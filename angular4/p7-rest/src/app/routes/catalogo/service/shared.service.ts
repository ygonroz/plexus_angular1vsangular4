import { Elemento } from '../_data/elemento.model';
import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';


@Injectable()
export class SharedService {
  private apiUrl = 'http://localhost:3030/api/pub/items';

  constructor(private http: Http) {
    this.initialize();
  }

  initialize() {}

  getElements$(): Observable<Elemento[]> {
    return this.http
      .get(this.apiUrl)
      .map(r => r.json());
  }

  getElementById$(id): Observable<Elemento> {
    return this.http
      .get(`${this.apiUrl}/${id}`)
      .map(r => r.json());
  }

  newElement(): Elemento {
    return new Elemento('', '', '', '', 0);
  }

  saveElement$(newElement: Elemento): Observable<any> {
    return this.http
      .post(this.apiUrl, newElement);
  }

  deleteElement$(element: Elemento): Observable<any> {
    return this.http
      .delete(`${this.apiUrl}/${element._id}`);
  }

}
