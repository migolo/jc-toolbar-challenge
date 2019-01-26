import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'toolbar-groupbutton',
  templateUrl: './groupbutton.component.html',
  styleUrls: ['./groupbutton.component.scss']
})
export class GroupButtonComponent implements OnInit {
  @Input('config') config: {};
  constructor() { }
  buttonPressed(button){
    if(button["onClick"]){
      button["onClick"]();
    }
  }
  ngOnInit() {
  }
}