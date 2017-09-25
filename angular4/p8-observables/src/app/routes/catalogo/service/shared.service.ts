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
  private elementsCount$: BehaviorSubject<number>;
  private elementsCount = 0;

  constructor(private http: Http) {
    this.initialize();
  }

  initialize() {
    this.elementsCount$ = new BehaviorSubject(this.elementsCount);
    this.getElements$()
      .subscribe(elements => {
        this.elementsCount = 0;
        if (elements) {
          this.elementsCount = elements.length;
        }
        this.emitElementsCount();
      });
  }

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
      .post(this.apiUrl, newElement)
      .do(r => {
        this.elementsCount++;
        this.emitElementsCount();
      });
  }

  deleteElement$(element: Elemento): Observable<any> {
    return this.http
      .delete(`${this.apiUrl}/${element._id}`)
      .do(r => {
        this.elementsCount--;
        this.emitElementsCount();
      });
  }

  getElementsCount$(): Observable<number> {
    return this.elementsCount$.asObservable();
  }

  private emitElementsCount() {
    this.elementsCount$.next(this.elementsCount);
  }

}
