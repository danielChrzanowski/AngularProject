import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { DataSource2 } from './data-source';
@Component({
  selector: 'app-strona-pierwsza',
  templateUrl: './strona-pierwsza.component.html',
  styleUrls: ['./strona-pierwsza.component.scss']
})
export class StronaPierwszaComponent implements OnInit {
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  dataSource: DataSource2;

  displayedColumns = ['id', 'nazwa', 'kapelusz','wielkosc'];

  ngOnInit() {
    this.dataSource = new DataSource2(this.paginator, this.sort);
  }
}
