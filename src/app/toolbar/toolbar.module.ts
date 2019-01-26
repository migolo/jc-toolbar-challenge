import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { GroupButtonComponent } from './components/groupbutton/groupbutton.component';
import { ActionButtonComponent } from './components/actionbutton/actionbutton.component';
import { StateButtonComponent } from './components/statebutton/statebutton.component';

@NgModule({
  declarations: [ToolbarComponent, DropdownComponent, GroupButtonComponent, ActionButtonComponent, StateButtonComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [ ToolbarComponent ]
})
export class ToolbarModule { }
