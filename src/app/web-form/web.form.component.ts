import {Component, OnInit} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TdMediaService } from '@covalent/core';
import {ActivatedRoute} from '@angular/router';
import { ilisEnvironment } from 'app/../environments/environment';
@Component({
  selector: 'router-outlet',
  templateUrl: './web.form.component.html',
  styleUrls: ['./web.form.component.scss'],
})
export class WebFormComponent implements OnInit {
  title: string;
  pgName: any;
  url: string =  ilisEnvironment.webFormRoot;
  constructor(private _titleService: Title,
              public media: TdMediaService,
              private route: ActivatedRoute) {
  }


  ngOnInit(): void {
    this.route.data.forEach((data: any) => {
      this.pgName = data['pgName'];
      this.url += this.pgName + '/Index';
    });
  }

}
