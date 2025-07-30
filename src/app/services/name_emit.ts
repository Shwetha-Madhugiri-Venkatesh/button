import { EventEmitter, Injectable, Input, Output } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class name_emit{
// @Output()
//   emit_name:EventEmitter<string>=new EventEmitter<string>

//   emit_name_raise(val:string){
//     this.emit_name.emit(val);
//   }

   // name_subject = new Subject();
   name:string='lokesh';
}