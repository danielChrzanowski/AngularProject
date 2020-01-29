
import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

export interface DataTableItem {
  name: string;
  kapelusz: string;
  id: number;
  amount: number;
}

const EXAMPLE_DATA: DataTableItem[] = [
  { id: 1, name: 'Hydrogen', kapelusz: 'asd', amount: 10 },
  { id: 2, name: 'Hydrogen', kapelusz: 'asd', amount: 10 },
  { id: 3, name: 'Hydrogen', kapelusz: 'asd', amount: 10 },
  { id: 4, name: 'Hydrogen', kapelusz: 'asd', amount: 10 },
  { id: 5, name: 'Hydrogen', kapelusz: 'asd', amount: 10 },
  { id: 6, name: 'Hydrogen', kapelusz: 'asd', amount: 10 },
  { id: 7, name: 'Hydrogen', kapelusz: 'asd', amount: 10 },
  { id: 8, name: 'Hydrogen', kapelusz: 'asd', amount: 10 },

];

export class DataSource2 extends DataSource<DataTableItem>{
  data: DataTableItem[] = EXAMPLE_DATA;

  constructor(private paginator: MatPaginator, private sort: MatSort) {
    super();
  }

  connect(): Observable<DataTableItem[]> {
    const dataChange = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    this.paginator.length = this.data.length;

    return merge(...dataChange).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  disconnect() { }

  private getPagedData(data: DataTableItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  private getSortedData(data: DataTableItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'kapelusz': return compare(a.name, b.name, isAsc);
        case 'amount': return compare(+a.amount, +b.amount, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }

}

function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}