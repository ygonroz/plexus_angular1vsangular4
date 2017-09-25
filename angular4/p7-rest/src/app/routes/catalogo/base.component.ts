import { Component, OnInit } from '@angular/core';
import { SharedService } from './service/shared.service';

@Component({
  selector: 'cat-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
