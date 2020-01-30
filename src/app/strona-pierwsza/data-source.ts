
import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

export interface DataTableItem {
  nazwa: string;
  kapelusz: string;
  id: number;
  wielkosc: number;
}

const EXAMPLE_DATA: DataTableItem[] = [
  { id: 1, nazwa: 'Borowik zwyczajny', kapelusz: '25', wielkosc: 20 },
  { id: 2, nazwa: 'Koźlarz babka', kapelusz: '6 - 25', wielkosc: 17 },
  { id: 3, nazwa: 'Podgrzybek złotopory', kapelusz: '3 - 10', wielkosc: 8 },
  { id: 4, nazwa: 'Mleczaj smaczny', kapelusz: '5 - 15', wielkosc: 12 },
  { id: 5, nazwa: 'Pieczarka bulwiasta', kapelusz: '6 - 14', wielkosc: 10 },
  { id: 6, nazwa: 'Maślak żółty', kapelusz: '4 - 15', wielkosc: 14 },
  { id: 7, nazwa: 'Piaskowiec modrzak', kapelusz: '3.5 - 12', wielkosc: 10 },
  { id: 8, nazwa: 'Bocznik ostrygowaty', kapelusz: '5 - 25', wielkosc: 4 },
];

export class DataSource2 extends DataSource<DataTableItem>{
  dana: DataTableItem[] = EXAMPLE_DATA;

  constructor(private paginator: MatPaginator, private sort: MatSort) {
    super();
  }

  //lacze sie z tabelka i aktualizuje wszystko za jednym razem
  //przy zmianie zawartosci - zmiana strony lub sortowanie
  connect(): Observable<DataTableItem[]> {
    const zmianaDanych = [
      observableOf(this.dana),
      this.paginator.page,
      this.sort.sortChange
    ];

    this.paginator.length = this.dana.length;

    //zwracam polaczone dane ze 'zmianaDanych' w jedno Observable
    //i zmienione przez paginator i sortowanie
    return merge(...zmianaDanych).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.dana]));
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
      const rosnaco = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'nazwa': return porownaj(a.nazwa, b.nazwa, rosnaco);
        case 'kapelusz': return porownaj(a.nazwa, b.nazwa, rosnaco);
        case 'wielkosc': return porownaj(+a.wielkosc, +b.wielkosc, rosnaco);
        case 'id': return porownaj(+a.id, +b.id, rosnaco);
        default: return 0;
      }
    });
  }

}

function porownaj(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}