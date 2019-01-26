import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'toolbar-statebutton',
  templateUrl: './statebutton.component.html',
  styleUrls: ['./statebutton.component.scss']
})
export class StateButtonComponent implements OnInit {
  @Input('config') config: {};
  constructor() { }

  buttonPressed(){
    if(this.config["onClick"]){
      this.config["onClick"]();
    }
  }
  ngOnInit() {
  }
}