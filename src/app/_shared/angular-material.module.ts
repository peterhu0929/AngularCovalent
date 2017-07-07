import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MdButtonModule, MdCheckboxModule, MdGridListModule, MdCardModule} from '@angular/material';
import 'hammerjs';
@NgModule({
  imports: [
    CommonModule,
    MdButtonModule,
    MdCheckboxModule,
    MdGridListModule,
    MdCardModule,
  ],
  exports: [
    MdButtonModule,
    MdCheckboxModule,
    MdGridListModule,
    MdCardModule,
  ],
  declarations: [],
})
export class AngularMaterialModule { }
