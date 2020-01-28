import { Injectable } from '@angular/core';
import { Mysl } from '../classes/mysl';

@Injectable({
  providedIn: 'root'
})

export class SerwisService {
  private nextID: number;

  constructor() {
    let mysli = this.getMysli();

    if (mysli.length == 0) {
      this.nextID = 0;
    } else {
      let maxID = mysli[mysli.length - 1].id;
      this.nextID = maxID + 1;
    }
  }

  public addMysl(tekst: string): boolean {
    if (tekst.length < 59 && tekst.length > 0) {
      let mysl = new Mysl(this.nextID, tekst);
      let mysli = this.getMysli();
      mysli.push(mysl);

      this.setLocalStorageTodos(mysli);
      this.nextID++;
      return true;
    } else {
      return false;
    }
  }

  private setLocalStorageTodos(mysli: Mysl[]): void {
    localStorage.setItem('mysl', JSON.stringify({ mysli: mysli }));
  }

  public getMysli(): Mysl[] {
    let localStorageItem = JSON.parse(localStorage.getItem('mysl'));
    return localStorageItem == null ? [] : localStorageItem.mysli;
  }

  public removeMysl(id: number): void {
    let mysli = this.getMysli();
    mysli = mysli.filter((mysl) => mysl.id != id);
    this.setLocalStorageTodos(mysli);
  }

}
