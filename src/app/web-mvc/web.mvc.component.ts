import {Component, OnInit} from '@angular/core';
import {TdMediaService} from '@covalent/core';
import {ActivatedRoute} from '@angular/router';
import { ilisEnvironment } from 'app/../environments/environment';
@Component({
  selector: 'app-web',
  templateUrl: './web.mvc.component.html',
  styleUrls: ['./web.mvc.component.scss'],
})
export class WebMvcComponent implements OnInit {

  pgName: any;
  url: string =  ilisEnvironment.mvcFormRoot ;
  // url: string = 'http://ymfindev02.yangming.com/acctmvc/';

  constructor(public media: TdMediaService,
              private route: ActivatedRoute) {
  }

  gotoGoogle(): void {
    window.location.href = 'https://www.google.com';
  }

  ngOnInit(): void {
    this.route.data.forEach((data: any) => {
      this.pgName = data['pgName'];
      this.url += this.pgName + '/Index';
    });
  }

}
