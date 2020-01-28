import {Component} from '@angular/core';
import {Sort} from '@angular/material/sort';

export interface Dessert {
  calories: number;
  carbs: string;
  fat: number;
  name: string;
  protein: number;
}

@Component({
  selector: 'app-strona-pierwsza',
  templateUrl: './strona-pierwsza.component.html',
  styleUrls: ['./strona-pierwsza.component.scss']
})
export class StronaPierwszaComponent{
  desserts: Dessert[] = [
    {name: 'Borowik szlachetny', calories: 25, fat: 20, carbs: 'biały', protein: 18},
    {name: 'Koźlarz babka', calories: 20, fat: 2.5, carbs: 'białokremowy', protein: 20},
    {name: 'Podgrzybek złotopory', calories: 10, fat: 8, carbs: 'żółty', protein: 14},
    {name: 'Pieczarka zaroślowa', calories: 14, fat: 10, carbs: 'biały', protein: 7.5},
    {name: 'Mleczaj smaczny', calories: 15, fat: 12, carbs: 'jasnożółty', protein: 9.5},
  ];

  sortedData: Dessert[];

  constructor() {
    this.sortedData = this.desserts.slice();
  }

  sortData(sort: Sort) {
    const data = this.desserts.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'calories': return compare(a.calories, b.calories, isAsc);
        case 'fat': return compare(a.fat, b.fat, isAsc);
        case 'carbs': return compare(a.carbs, b.carbs, isAsc);
        case 'protein': return compare(a.protein, b.protein, isAsc);
        default: return 0;
      }
    });
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}