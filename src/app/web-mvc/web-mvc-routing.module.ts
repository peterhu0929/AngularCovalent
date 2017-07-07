/**
 * Created by winston.ws.lu on 2017/6/8.
 */
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {WebMvcComponent} from './web.mvc.component';

const routes: Routes = [
  {
    path: 'AA01020W',
    component: WebMvcComponent,
    data: {pgName: 'AA01020W'},
  },
  {
    path: 'AR01020W',
    component: WebMvcComponent,
    data: {pgName: 'AR01020W'},
  },
  {
    path: 'AR02041W',
    component: WebMvcComponent,
    data: {pgName: 'AR02041W'},
  },
  {
    path: 'CM11010W',
    component: WebMvcComponent,
    data: {pgName: 'CM11010W'},
  },
  {
    path: 'CM11010W',
    component: WebMvcComponent,
    data: {pgName: 'CM11010W'},
  },
  {
    path: 'CM11012W',
    component: WebMvcComponent,
    data: {pgName: 'CM11012W'},
  },
  {
    path: 'CM11013W',
    component: WebMvcComponent,
    data: {pgName: 'CM11013W'},
  },
  {
    path: 'CM11040W',
    component: WebMvcComponent,
    data: {pgName: 'CM11040W'},
  },
  {
    path: 'CM32060W',
    component: WebMvcComponent,
    data: {pgName: 'CM32060W'},
  },
  {
    path: 'CM92035W',
    component: WebMvcComponent,
    data: {pgName: 'CM92035W'},
  },
  {
    path: 'CM92060W',
    component: WebMvcComponent,
    data: {pgName: 'CM92060W'},
  },
  {
    path: 'CM92100W',
    component: WebMvcComponent,
    data: {pgName: 'CM92100W'},
  },
  {
    path: 'DD00001W',
    component: WebMvcComponent,
    data: {pgName: 'DD00001W'},
  },
  {
    path: 'DD00002W',
    component: WebMvcComponent,
    data: {pgName: 'DD00002W'},
  },
  {
    path: 'DD00003W',
    component: WebMvcComponent,
    data: {pgName: 'DD00003W'},
  },
  {
    path: 'EM10010W',
    component: WebMvcComponent,
    data: {pgName: 'EM10010W'},
  },
  {
    path: 'EM10020W',
    component: WebMvcComponent,
    data: {pgName: 'EM10020W'},
  },
  {
    path: 'GL04017W',
    component: WebMvcComponent,
    data: {pgName: 'GL04017W'},
  },
  {
    path: 'IV11010W',
    component: WebMvcComponent,
    data: {pgName: 'IV11010W'},
  },
  {
    path: 'IV11020W',
    component: WebMvcComponent,
    data: {pgName: 'IV11020W'},
  },
  {
    path: 'IV11030W',
    component: WebMvcComponent,
    data: {pgName: 'IV11030W'},
  },
  {
    path: 'IV11035W',
    component: WebMvcComponent,
    data: {pgName: 'IV11035W'},
  },
  {
    path: 'IV11040W',
    component: WebMvcComponent,
    data: {pgName: 'IV11040W'},
  },
  {
    path: 'IV11050W',
    component: WebMvcComponent,
    data: {pgName: 'IV11050W'},
  },
  {
    path: 'IV11060W',
    component: WebMvcComponent,
    data: {pgName: 'IV11060W'},
  },
  {
    path: 'IV11070W',
    component: WebMvcComponent,
    data: {pgName: 'IV11070W'},
  },
  {
    path: 'IV11080W',
    component: WebMvcComponent,
    data: {pgName: 'IV11080W'},
  },
  {
    path: 'IV21010W',
    component: WebMvcComponent,
    data: {pgName: 'IV21010W'},
  },
  {
    path: 'IV21020W',
    component: WebMvcComponent,
    data: {pgName: 'IV21020W'},
  },
  {
    path: 'IV21040W',
    component: WebMvcComponent,
    data: {pgName: 'IV21040W'},
  },
  {
    path: 'IV21050W',
    component: WebMvcComponent,
    data: {pgName: 'IV21050W'},
  },
  {
    path: 'IV21060W',
    component: WebMvcComponent,
    data: {pgName: 'IV21060W'},
  },
  {
    path: 'IV21070W',
    component: WebMvcComponent,
    data: {pgName: 'IV21070W'},
  },
  {
    path: 'IV21080W',
    component: WebMvcComponent,
    data: {pgName: 'IV21080W'},
  },
  {
    path: 'IV21085W',
    component: WebMvcComponent,
    data: {pgName: 'IV21085W'},
  },
  {
    path: 'IV21090W',
    component: WebMvcComponent,
    data: {pgName: 'IV21090W'},
  },
  {
    path: 'IV21100W',
    component: WebMvcComponent,
    data: {pgName: 'IV21100W'},
  },
  {
    path: 'IV41010W',
    component: WebMvcComponent,
    data: {pgName: 'IV41010W'},
  },
  {
    path: 'IV41020W',
    component: WebMvcComponent,
    data: {pgName: 'IV41020W'},
  },
  {
    path: 'IV41030W',
    component: WebMvcComponent,
    data: {pgName: 'IV41030W'},
  },
  {
    path: 'OC11080W',
    component: WebMvcComponent,
    data: {pgName: 'OC11080W'},
  },
  {
    path: 'OC21030W',
    component: WebMvcComponent,
    data: {pgName: 'OC21030W'},
  },
  {
    path: 'VP00002W',
    component: WebMvcComponent,
    data: {pgName: 'VP00002W'},
  },
  {
    path: 'VP03003W',
    component: WebMvcComponent,
    data: {pgName: 'VP03003W'},
  },
  {
    path: 'VP03004W',
    component: WebMvcComponent,
    data: {pgName: 'VP03004W'},
  },
  {
    path: 'VP03075W',
    component: WebMvcComponent,
    data: {pgName: 'VP03075W'},
  },
  {
    path: 'VP11040W',
    component: WebMvcComponent,
    data: {pgName: 'VP11040W'},
  },
  {
    path: 'VP21100W',
    component: WebMvcComponent,
    data: {pgName: 'VP21100W'},
  },
];
@NgModule({
  imports: [
    RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class WebMvcRoutingModule {
}
