import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WebMvcComponent} from './web.mvc.component';
import {WebMvcRoutingModule} from './web-mvc-routing.module';
import {SafePipeModule} from '../_shared/safe-pipe.module';

@NgModule({
  imports: [
    CommonModule,
    WebMvcRoutingModule,
    SafePipeModule,
  ],
  declarations: [
    WebMvcComponent,
  ],
})
export class WebMvcModule {
}
