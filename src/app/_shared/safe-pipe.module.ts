import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import 'hammerjs';
import {SafePipe} from './pipe/safe-pipe.pipe';
@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    SafePipe,
  ],
  declarations: [
    SafePipe,
  ],
})
export class SafePipeModule {
}
