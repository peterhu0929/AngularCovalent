import {Routes, RouterModule} from '@angular/router';

import {MainComponent} from './main/main.component';
import {LoginComponent} from './login/login.component';

// session
import {AuthGuard} from './_guards/index';
import {WebFormComponent} from './web-form/web.form.component';
/*
const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: MainComponent, children: [
    {path: 'GL', loadChildren: './GL/gl.module#GlModule'},
  ], canActivate: [AuthGuard]},
];

*/
/*const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {
    path: '', component: MainComponent, canActivate: [AuthGuard], children: [
    {path: '', component: DashboardProductComponent, children: [
      {path: 'GL', loadChildren: './GL/gl.module#GlModule'},
    ],
    },
  ],
  },
];*/

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {
    path: '', component: MainComponent, canActivate: [AuthGuard], children: [
      {path: 'GL', loadChildren: './GL/gl.module#GlModule'},
      {path: 'WebForm', loadChildren: './web-form/web-form.module#WebFormModule'},
      {path: 'WebMvc', loadChildren: './web-mvc/web-mvc.module#WebMvcModule'},
    ],
  },
];


export const appRoutingProviders: any[] = [];

export const appRoutes: any = RouterModule.forRoot(routes, {useHash: true});
