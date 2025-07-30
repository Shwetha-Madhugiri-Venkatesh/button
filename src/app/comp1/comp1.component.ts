import { Component, ContentChild, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { name_emit } from '../services/name_emit';
import { Subject } from 'rxjs';
import { Comp2Component } from '../comp2/comp2.component';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component {
  name='Lokesh';
  constructor(public service:name_emit){}
  @Input()
  component:Comp2Component;
  change_name(){
    //this.service.name_subject.next("shwetha");
    //this.service.name_change("shwetha");
    this.service.name='shwetha';
    this.component.update_name_change();
    //this.comp2.update_name='shwetha';
  }
}
