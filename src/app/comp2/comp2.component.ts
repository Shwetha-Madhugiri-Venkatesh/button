import { Component, Input, ViewChild } from '@angular/core';
import { name_emit } from '../services/name_emit';
import { Comp1Component } from '../comp1/comp1.component';

@Component({
  selector: 'app-comp2',
  //templateUrl: './comp2.component.html',
   template: `
    <button (click)="check()">Check for Update</button>
    <p>{{ data }}</p>
  `,
  styleUrls: ['./comp2.component.css'],
})
export class Comp2Component {
  data
  constructor(public service:name_emit){}
  update_name:string=this.service.name;

  check() {
    this.data = this.service.name;
  }
  update_name_change(){
    this.update_name=this.service.name;
  }
}
