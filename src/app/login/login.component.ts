import { Component, OnInit } from '@angular/core';
import {AppSessionService} from '../_services/app-session.service';
import {AuthenticationService} from "../_services/authentication.service";


class ILISMoudle {
  code: string;
  name: string;
}

@Component({
  selector: 'qs-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  // providers: [AutoLogoutService],
})
export class LoginComponent implements OnInit {
  // model: any = {};
  username: string;
  password: string;
  moudle: string;

  sysMoudles: { code: string, name: string }[];

  loading: boolean = false;
  error: string = '';

  constructor(private  appSessionService: AppSessionService,
              private  autherticationService: AuthenticationService,
  ) {
  }

  ngOnInit(): void {

    this.sysMoudles  = [
      { 'code': 'ILIS', 'name': 'ILIS' },
      { 'code': 'YMGA', 'name': 'YMGA' },
      { 'code': 'VENDOR', 'name': 'Vendor' },
    ];

    this.moudle = this.sysMoudles[0].code;

    // reset login status
    this.autherticationService.logout();
  }

  login(): void {
    this.appSessionService.login();
    this.autherticationService.login(this.username, this.password, this.moudle);
    alert(this.autherticationService.getMessage());
  }

}
