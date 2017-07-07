import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WebFormComponent} from './web.form.component';
import {WebFormRoutingModule} from './web-form-routing.module';
import {SafePipeModule} from '../_shared/safe-pipe.module';
@NgModule({
  imports: [
    CommonModule,
    WebFormRoutingModule,
    SafePipeModule,
  ],
  declarations: [
    WebFormComponent,
  ],
})
export class WebFormModule {
}
