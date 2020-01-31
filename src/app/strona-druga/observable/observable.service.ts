import { Injectable } from '@angular/core';
import { Grzyb } from './grzyb.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservableService {

  grzyby: Grzyb[] = [{
    id: 1,
    nazwa: 'Borowik szlachetny',
    ilosc: 25
  },
  {
    id: 2,
    nazwa: 'Koźlarz babka',
    ilosc: 2
  },
  {
    id: 3,
    nazwa: 'Podgrzybek złotopory',
    ilosc: 2
  }];

  constructor() { }

  public getGrzyby(): any {
    const grzybyObservable = new Observable(obserwator => {
      setTimeout(() => {
        obserwator.next(this.grzyby);
      }, 3000);
    });

    return grzybyObservable;
  }

}
