import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'toolbar-actionbutton',
  templateUrl: './actionbutton.component.html',
  styleUrls: ['./actionbutton.component.scss']
})
export class ActionButtonComponent implements OnInit {
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