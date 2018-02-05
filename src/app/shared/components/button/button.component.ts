
/* 3rd party libraries */
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs/Rx';

/* globally accessible app code (in every feature module) */
import { GlobalService } from '@app/core';
import { AuthenticationService } from '@app/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() buttonLabel :String ;
  @Input() buttonColor ? : String;
  @Input() icon ? : String;
  @Output() sendEvent : EventEmitter<Object> = new EventEmitter<Object>() ;

  constructor() {
    console.log(this.buttonLabel);
  }

  ngOnInit() {

  }
  
  onClick($event){
    this.sendEvent.emit($event);
  }

  onBlur($event){
    this.sendEvent.emit($event);
  }
}
