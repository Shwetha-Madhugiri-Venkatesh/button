import { Component, ViewChild } from '@angular/core';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'button';
  name:string='';

  // @ViewChild('comp1') comp:Comp1Component|undefined
  // get_name(val:string){
  //   this.name=val;
  // }

  @ViewChild('comp2') comp :Comp2Component|undefined
}
