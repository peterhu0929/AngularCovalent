import {Component, OnInit, AfterViewInit} from '@angular/core';
import {GlService} from '../gl-service.service';
import {GridDataResult, PageChangeEvent} from '@progress/kendo-angular-grid';

@Component({
  selector: 'app-gl11010w',
  templateUrl: './gl11010w.component.html',
  styleUrls: ['./gl11010w.component.scss'],
})
export class Gl11010wComponent implements OnInit {
  public gridView: GridDataResult;
  public pageSize: number = 20;
  public skip: number = 0;

  public items: any[];

  constructor(private glService: GlService) {
  }

  ngOnInit(): void {
    // this.loadItems();
    //  this.glService.getkendoDatas().then((x: any) => this.items = x).then((x: any) => this.loadItems());
  }

  protected pageChange(event: PageChangeEvent): void {
    this.skip = event.skip;
    this.loadItems();
  }

  private loadItems(): void {
    this.gridView = {
      data: this.items.slice(this.skip, this.skip + this.pageSize),
      total: this.items.length,
    };
  }

}
