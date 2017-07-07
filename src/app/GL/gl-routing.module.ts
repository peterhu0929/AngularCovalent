import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {Gl11010wComponent} from './gl11010w/gl11010w.component';

const routes: Routes = [
  {
    path: 'GL11010W',
    component: Gl11010wComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class GlRoutingModule {
}
