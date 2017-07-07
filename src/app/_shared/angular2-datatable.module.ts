/**
 * Created by user on 2017/5/31.
 */
import {NgModule} from '@angular/core';
import {DataTableModule} from 'angular2-datatable';
import {Ng2TableModule} from 'ng2-table/ng2-table';
import {PaginationModule} from 'ngx-bootstrap';

@NgModule({
  imports: [
    DataTableModule,
    Ng2TableModule,
    PaginationModule.forRoot(),

  ],
  exports: [
    DataTableModule,
    Ng2TableModule,
    PaginationModule,

  ],
})
export class AngularDatatable {

}
