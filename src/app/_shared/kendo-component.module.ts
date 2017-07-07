/**
 * Created by user on 2017/6/4.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridModule } from '@progress/kendo-angular-grid';

@NgModule({
  imports: [
    CommonModule,
    GridModule
  ],
  exports: [
    GridModule
  ],
  declarations: [],
})
export class KendoComponentModule { }
