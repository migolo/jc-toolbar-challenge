import { Component, NgZone } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'jonajo-challenge-toolbar';
  constructor(private zone: NgZone){

  }
  toolbarConfig = [
    {
      type: "dropdown",
      elements: [{
        id: "item-1",
        name: "Font 1"
      },{
        id: "item-2",
        name: "Font 2"
      }],
      selected: 'item-1',
      onSelected: (selectedID) => {
        console.log(`Item: ${selectedID}`);
      }
    },{
      type: "statebutton",
      text: "Bold",
      className: "bold",
      active: false,
      onClick: ()=>{
        this.toolbarConfig[1].active = !this.toolbarConfig[1].active;
      }
    },{
      type: "statebutton",
      text: "Italics",
      className: "italics",
      active: false,
      onClick: ()=>{
        this.toolbarConfig[2].active = !this.toolbarConfig[2].active;
      }
    },{
      type: "groupbutton",
      className: "selections",
      active: 'left',
      buttons: [{
        id: 'left',
        text: "Left",
        className: "left",
        onClick: () => {
          this.toolbarConfig[3].active = 'left';
        }
      },{
        id: 'middle',
        text: "Middle",
        className: "middle",
        onClick: () => {
          this.toolbarConfig[3].active = 'middle';
        }
      },{
        id: 'right',
        text: "Right",
        className: "right",
        onClick: () => {
          this.toolbarConfig[3].active = 'right';
        }
      }]
    },{
      type: "actionbutton",
      text: "Go To Google",
      className: "google",
      onClick: () => {
        window.alert(`Going to google`);
        //window.location.href = `https://www.google.com`;
      }
    }
  ]
}
