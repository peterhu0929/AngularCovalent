/**
 * Created by winston.ws.lu on 2017/6/8.
 */
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {WebFormComponent} from './web.form.component';

const routes: Routes = [
  {
    path: 'AR01030W',
    component: WebFormComponent,
    data: {pgName: 'AR01030W'},
  },
  {
    path: 'AR01150W',
    component: WebFormComponent,
    data: {pgName: 'AR01150W'},
  },
  {
    path: 'AR01230W',
    component: WebFormComponent,
    data: {pgName: 'AR01230W'},
  },
  {
    path: 'AR01240W',
    component: WebFormComponent,
    data: {pgName: 'AR01240W'},
  },
  {
    path: 'AR02000W',
    component: WebFormComponent,
    data: {pgName: 'AR02000W'},
  },
  {
    path: 'AR02020W',
    component: WebFormComponent,
    data: {pgName: 'AR02020W'},
  },
  {
    path: 'AR02020W',
    component: WebFormComponent,
    data: {pgName: 'AR02020W'},
  },
  {
    path: 'AR02030W',
    component: WebFormComponent,
    data: {pgName: 'AR02030W'},
  },
  {
    path: 'AR02040W',
    component: WebFormComponent,
    data: {pgName: 'AR02040W'},
  },
  {
    path: 'AR02050W',
    component: WebFormComponent,
    data: {pgName: 'AR02050W'},
  },
  {
    path: 'AR02060W',
    component: WebFormComponent,
    data: {pgName: 'AR02060W'},
  },
  {
    path: 'AR02090W',
    component: WebFormComponent,
    data: {pgName: 'AR02090W'},
  },
  {
    path: 'AR03040W',
    component: WebFormComponent,
    data: {pgName: 'AR03040W'},
  },
  {
    path: 'AR04030W',
    component: WebFormComponent,
    data: {pgName: 'AR04030W'},
  },
  {
    path: 'AR04040W',
    component: WebFormComponent,
    data: {pgName: 'AR04040W'},
  },
  {
    path: 'AR04070W',
    component: WebFormComponent,
    data: {pgName: 'AR04070W'},
  },
  {
    path: 'AR05010W',
    component: WebFormComponent,
    data: {pgName: 'AR05010W'},
  },
  {
    path: 'AR05040W',
    component: WebFormComponent,
    data: {pgName: 'AR05040W'},
  },
  {
    path: 'AR05050W',
    component: WebFormComponent,
    data: {pgName: 'AR05050W'},
  },
  {
    path: 'AR05110W',
    component: WebFormComponent,
    data: {pgName: 'AR05110W'},
  },
  {
    path: 'AS00010W',
    component: WebFormComponent,
    data: {pgName: 'AS00010W'},
  },
  {
    path: 'AS00020W',
    component: WebFormComponent,
    data: {pgName: 'AS00020W'},
  },
  {
    path: 'AS00030W',
    component: WebFormComponent,
    data: {pgName: 'AS00030W'},
  },
  {
    path: 'AS00040W',
    component: WebFormComponent,
    data: {pgName: 'AS00040W'},
  },
  {
    path: 'AS00050W',
    component: WebFormComponent,
    data: {pgName: 'AS00050W'},
  },
  {
    path: 'AS00060W',
    component: WebFormComponent,
    data: {pgName: 'AS00060W'},
  },
  {
    path: 'AS11010W',
    component: WebFormComponent,
    data: {pgName: 'AS11010W'},
  },
  {
    path: 'AS11020W',
    component: WebFormComponent,
    data: {pgName: 'AS11020W'},
  },
  {
    path: 'AS11030W',
    component: WebFormComponent,
    data: {pgName: 'AS11030W'},
  },
  {
    path: 'AS20010W',
    component: WebFormComponent,
    data: {pgName: 'AS20010W'},
  },
  {
    path: 'AS20010W',
    component: WebFormComponent,
    data: {pgName: 'AS20010W'},
  },
  {
    path: 'AS20010W',
    component: WebFormComponent,
    data: {pgName: 'AS20010W'},
  },
  {
    path: 'AS20010W',
    component: WebFormComponent,
    data: {pgName: 'AS20010W'},
  },
  {
    path: 'AS21010W',
    component: WebFormComponent,
    data: {pgName: 'AS21010W'},
  },
  {
    path: 'AS31010W',
    component: WebFormComponent,
    data: {pgName: 'AS31010W'},
  },
  {
    path: 'AS41010W',
    component: WebFormComponent,
    data: {pgName: 'AS41010W'},
  },
  {
    path: 'AS51010W',
    component: WebFormComponent,
    data: {pgName: 'AS51010W'},
  },
  {
    path: 'AS61010W',
    component: WebFormComponent,
    data: {pgName: 'AS61010W'},
  },
  {
    path: 'AS61011W',
    component: WebFormComponent,
    data: {pgName: 'AS61011W'},
  },
  {
    path: 'AS61060W',
    component: WebFormComponent,
    data: {pgName: 'AS61060W'},
  },
  {
    path: 'AS62010W',
    component: WebFormComponent,
    data: {pgName: 'AS62010W'},
  },
  {
    path: 'AS62020W',
    component: WebFormComponent,
    data: {pgName: 'AS62020W'},
  },
  {
    path: 'AS81010W',
    component: WebFormComponent,
    data: {pgName: 'AS81010W'},
  },
  {
    path: 'AS81011W',
    component: WebFormComponent,
    data: {pgName: 'AS81011W'},
  },
  {
    path: 'AS81012W',
    component: WebFormComponent,
    data: {pgName: 'AS81012W'},
  },
  {
    path: 'AS82010W',
    component: WebFormComponent,
    data: {pgName: 'AS82010W'},
  },
  {
    path: 'AS83010W',
    component: WebFormComponent,
    data: {pgName: 'AS83010W'},
  },
  {
    path: 'AS91010W',
    component: WebFormComponent,
    data: {pgName: 'AS91010W'},
  },
  {
    path: 'CM11030W',
    component: WebFormComponent,
    data: {pgName: 'CM11030W'},
  },
  {
    path: 'CM31020W',
    component: WebFormComponent,
    data: {pgName: 'CM31020W'},
  },
  {
    path: 'CM31030W',
    component: WebFormComponent,
    data: {pgName: 'CM31030W'},
  },
  {
    path: 'CM31030W',
    component: WebFormComponent,
    data: {pgName: 'CM31030W'},
  },
  {
    path: 'CM41040W',
    component: WebFormComponent,
    data: {pgName: 'CM41040W'},
  },
  {
    path: 'CM51010W',
    component: WebFormComponent,
    data: {pgName: 'CM51010W'},
  },
  {
    path: 'CM51060W',
    component: WebFormComponent,
    data: {pgName: 'CM51060W'},
  },
  {
    path: 'CM92100W',
    component: WebFormComponent,
    data: {pgName: 'CM92100W'},
  },
  {
    path: 'DA51020F',
    component: WebFormComponent,
    data: {pgName: 'DA51020F'},
  },
  {
    path: 'DA51030W',
    component: WebFormComponent,
    data: {pgName: 'DA51030W'},
  },
  {
    path: 'DA51050W',
    component: WebFormComponent,
    data: {pgName: 'DA51050W'},
  },
  {
    path: 'DA51090W',
    component: WebFormComponent,
    data: {pgName: 'DA51090W'},
  },
  {
    path: 'DA51100W',
    component: WebFormComponent,
    data: {pgName: 'DA51100W'},
  },
  {
    path: 'DA51110W',
    component: WebFormComponent,
    data: {pgName: 'DA51110W'},
  },
  {
    path: 'DA61020W',
    component: WebFormComponent,
    data: {pgName: 'DA61020W'},
  },
  {
    path: 'DA61040W',
    component: WebFormComponent,
    data: {pgName: 'DA61040W'},
  },
  {
    path: 'DA61050W',
    component: WebFormComponent,
    data: {pgName: 'DA61050W'},
  },
  {
    path: 'DA61090W',
    component: WebFormComponent,
    data: {pgName: 'DA61090W'},
  },
  {
    path: 'DA99020W',
    component: WebFormComponent,
    data: {pgName: 'DA99020W'},
  },
  {
    path: 'GL00100W',
    component: WebFormComponent,
    data: {pgName: 'GL00100W'},
  },
  {
    path: 'GL00102W',
    component: WebFormComponent,
    data: {pgName: 'GL00102W'},
  },
  {
    path: 'GL00103W',
    component: WebFormComponent,
    data: {pgName: 'GL00103W'},
  },
  {
    path: 'GL00104W',
    component: WebFormComponent,
    data: {pgName: 'GL00104W'},
  },
  {
    path: 'GL00105W',
    component: WebFormComponent,
    data: {pgName: 'GL00105W'},
  },
  {
    path: 'GL00106W',
    component: WebFormComponent,
    data: {pgName: 'GL00106W'},
  },
  {
    path: 'GL00107W',
    component: WebFormComponent,
    data: {pgName: 'GL00107W'},
  },
  {
    path: 'GL00109W',
    component: WebFormComponent,
    data: {pgName: 'GL00109W'},
  },
  {
    path: 'GL00111W',
    component: WebFormComponent,
    data: {pgName: 'GL00111W'},
  },
  {
    path: 'GL00112W',
    component: WebFormComponent,
    data: {pgName: 'GL00112W'},
  },
  {
    path: 'GL00113W',
    component: WebFormComponent,
    data: {pgName: 'GL00113W'},
  },
  {
    path: 'GL00114W',
    component: WebFormComponent,
    data: {pgName: 'GL00114W'},
  },
  {
    path: 'GL00115W',
    component: WebFormComponent,
    data: {pgName: 'GL00115W'},
  },
  {
    path: 'GL00116W',
    component: WebFormComponent,
    data: {pgName: 'GL00116W'},
  },
  {
    path: 'GL00120W',
    component: WebFormComponent,
    data: {pgName: 'GL00120W'},
  },
  {
    path: 'GL00121W',
    component: WebFormComponent,
    data: {pgName: 'GL00121W'},
  },
  {
    path: 'GL01015W',
    component: WebFormComponent,
    data: {pgName: 'GL01015W'},
  },
  {
    path: 'GL01016W',
    component: WebFormComponent,
    data: {pgName: 'GL01016W'},
  },
  {
    path: 'GL02000W',
    component: WebFormComponent,
    data: {pgName: 'GL02000W'},
  },
  {
    path: 'GL02001W',
    component: WebFormComponent,
    data: {pgName: 'GL02001W'},
  },
  {
    path: 'GL02002W',
    component: WebFormComponent,
    data: {pgName: 'GL02002W'},
  },
  {
    path: 'GL02003W',
    component: WebFormComponent,
    data: {pgName: 'GL02003W'},
  },
  {
    path: 'GL02004W',
    component: WebFormComponent,
    data: {pgName: 'GL02004W'},
  },
  {
    path: 'GL02005W',
    component: WebFormComponent,
    data: {pgName: 'GL02005W'},
  },
  {
    path: 'GL02006W',
    component: WebFormComponent,
    data: {pgName: 'GL02006W'},
  },
  {
    path: 'GL02006W',
    component: WebFormComponent,
    data: {pgName: 'GL02006W'},
  },
  {
    path: 'GL02006W',
    component: WebFormComponent,
    data: {pgName: 'GL02006W'},
  },
  {
    path: 'GL02006W',
    component: WebFormComponent,
    data: {pgName: 'GL02006W'},
  },
  {
    path: 'GL02006W',
    component: WebFormComponent,
    data: {pgName: 'GL02006W'},
  },
  {
    path: 'GL02007W',
    component: WebFormComponent,
    data: {pgName: 'GL02007W'},
  },
  {
    path: 'GL02007W',
    component: WebFormComponent,
    data: {pgName: 'GL02007W'},
  },
  {
    path: 'GL02007W',
    component: WebFormComponent,
    data: {pgName: 'GL02007W'},
  },
  {
    path: 'GL02007W',
    component: WebFormComponent,
    data: {pgName: 'GL02007W'},
  },
  {
    path: 'GL02011W',
    component: WebFormComponent,
    data: {pgName: 'GL02011W'},
  },
  {
    path: 'GL02011W',
    component: WebFormComponent,
    data: {pgName: 'GL02011W'},
  },
  {
    path: 'GL03000W',
    component: WebFormComponent,
    data: {pgName: 'GL03000W'},
  },
  {
    path: 'GL03001W',
    component: WebFormComponent,
    data: {pgName: 'GL03001W'},
  },
  {
    path: 'GL03002W',
    component: WebFormComponent,
    data: {pgName: 'GL03002W'},
  },
  {
    path: 'GL04001W',
    component: WebFormComponent,
    data: {pgName: 'GL04001W'},
  },
  {
    path: 'GL04002W',
    component: WebFormComponent,
    data: {pgName: 'GL04002W'},
  },
  {
    path: 'GL04003W',
    component: WebFormComponent,
    data: {pgName: 'GL04003W'},
  },
  {
    path: 'GL04004W',
    component: WebFormComponent,
    data: {pgName: 'GL04004W'},
  },
  {
    path: 'GL04007W',
    component: WebFormComponent,
    data: {pgName: 'GL04007W'},
  },
  {
    path: 'GL04008W',
    component: WebFormComponent,
    data: {pgName: 'GL04008W'},
  },
  {
    path: 'GL04009W',
    component: WebFormComponent,
    data: {pgName: 'GL04009W'},
  },
  {
    path: 'GL04010W',
    component: WebFormComponent,
    data: {pgName: 'GL04010W'},
  },
  {
    path: 'GL04011W',
    component: WebFormComponent,
    data: {pgName: 'GL04011W'},
  },
  {
    path: 'GL04012W',
    component: WebFormComponent,
    data: {pgName: 'GL04012W'},
  },
  {
    path: 'GL04013W',
    component: WebFormComponent,
    data: {pgName: 'GL04013W'},
  },
  {
    path: 'GL04014W',
    component: WebFormComponent,
    data: {pgName: 'GL04014W'},
  },
  {
    path: 'GL04015W',
    component: WebFormComponent,
    data: {pgName: 'GL04015W'},
  },
  {
    path: 'GL04100W',
    component: WebFormComponent,
    data: {pgName: 'GL04100W'},
  },
  {
    path: 'GL04101W',
    component: WebFormComponent,
    data: {pgName: 'GL04101W'},
  },
  {
    path: 'GL04102W',
    component: WebFormComponent,
    data: {pgName: 'GL04102W'},
  },
  {
    path: 'GL04103W',
    component: WebFormComponent,
    data: {pgName: 'GL04103W'},
  },
  {
    path: 'GL05100W',
    component: WebFormComponent,
    data: {pgName: 'GL05100W'},
  },
  {
    path: 'GL06000W',
    component: WebFormComponent,
    data: {pgName: 'GL06000W'},
  },
  {
    path: 'OC21050W',
    component: WebFormComponent,
    data: {pgName: 'OC21050W'},
  },
  {
    path: 'VP21090W',
    component: WebFormComponent,
    data: {pgName: 'VP21090W'},
  },
  {
    path: 'VP31020W',
    component: WebFormComponent,
    data: {pgName: 'VP31020W'},
  },
  {
    path: 'VP31080W',
    component: WebFormComponent,
    data: {pgName: 'VP31080W'},
  },
  {
    path: 'VU21020W',
    component: WebFormComponent,
    data: {pgName: 'VU21020W'},
  },
  {
    path: 'VU21070W',
    component: WebFormComponent,
    data: {pgName: 'VU21070W'},
  },
  {
    path: 'VU21080W',
    component: WebFormComponent,
    data: {pgName: 'VU21080W'},
  },
  {
    path: 'VU21090W',
    component: WebFormComponent,
    data: {pgName: 'VU21090W'},
  },
  {
    path: 'VU31010W',
    component: WebFormComponent,
    data: {pgName: 'VU31010W'},
  },
  {
    path: 'VU31020W',
    component: WebFormComponent,
    data: {pgName: 'VU31020W'},
  },
  {
    path: 'WCM11030F',
    component: WebFormComponent,
    data: {pgName: 'WCM11030F'},
  },
  {
    path: 'WCM11040F',
    component: WebFormComponent,
    data: {pgName: 'WCM11040F'},
  },
  {
    path: 'WCM11060F',
    component: WebFormComponent,
    data: {pgName: 'WCM11060F'},
  },
  {
    path: 'WCM11070F',
    component: WebFormComponent,
    data: {pgName: 'WCM11070F'},
  },
  {
    path: 'WCM21060F',
    component: WebFormComponent,
    data: {pgName: 'WCM21060F'},
  },
  {
    path: 'WCM31030F',
    component: WebFormComponent,
    data: {pgName: 'WCM31030F'},
  },
  {
    path: 'WCM61060F',
    component: WebFormComponent,
    data: {pgName: 'WCM61060F'},
  },
  {
    path: 'WCM61090F',
    component: WebFormComponent,
    data: {pgName: 'WCM61090F'},
  },
  {
    path: 'WDA51020',
    component: WebFormComponent,
    data: {pgName: 'WDA51020'},
  },
  {
    path: 'WFI000000',
    component: WebFormComponent,
    data: {pgName: 'WFI000000'},
  },
  {
    path: 'WFI000003',
    component: WebFormComponent,
    data: {pgName: 'WFI000003'},
  },
  {
    path: 'WFISGA0003',
    component: WebFormComponent,
    data: {pgName: 'WFISGA0003'},
  },
  {
    path: 'WFISGA0004',
    component: WebFormComponent,
    data: {pgName: 'WFISGA0004'},
  },
  {
    path: 'WVU31020',
    component: WebFormComponent,
    data: {pgName: 'WVU31020'},
  },

];
@NgModule({
  imports: [
    RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class WebFormRoutingModule {
}
