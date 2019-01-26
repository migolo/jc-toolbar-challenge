import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'toolbar-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  @Input('config') config: {};
  constructor() { }

  selectionChanged(value){
    if(this.config["onSelected"]){
      this.config["onSelected"](value);
    }
  }

  ngOnInit() {
  }
}