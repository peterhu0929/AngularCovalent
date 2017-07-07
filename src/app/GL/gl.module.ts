import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Gl11010wComponent} from './gl11010w/gl11010w.component';
import {GlRoutingModule} from './gl-routing.module';
import {AngularMaterialModule} from '../_shared/angular-material.module';
import {AngularDatatable} from '../_shared/angular2-datatable.module';
import {GlService} from './gl-service.service';
import {FormsModule} from '@angular/forms';
import {KendoComponentModule} from '../_shared/kendo-component.module';
@NgModule({
  imports: [
    CommonModule,
    GlRoutingModule,
    AngularMaterialModule,
    AngularDatatable,
    FormsModule,
    KendoComponentModule,
  ],
  declarations: [
    Gl11010wComponent,
  ],
  providers: [GlService],
})
export class GlModule {
}
