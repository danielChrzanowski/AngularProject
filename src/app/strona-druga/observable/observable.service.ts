import { Injectable } from '@angular/core';
import { Komunikaty } from './komunikaty.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservableService {

  komunikaty: Komunikaty[] = [{
    id: 1,
    nazwa: "(Nie ma takiej lokacji w bazie pogody)"
  },
  {
    id: 2,
    nazwa: 'Idealne warunki na grzybobranie :)'
  },
  {
    id: 3,
    nazwa: 'Lepiej nie wychodzić z domu :('
  }];

  constructor() { }

  public getGrzyby(): any {
    const grzybyObservable = new Observable(obserwator => {
      obserwator.next(this.komunikaty);
    });

    return grzybyObservable;
  }

}
