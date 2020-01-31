import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApixuService } from './apixu.service';
import { Grzyb } from './observable/grzyb.model';
import { ObservableService } from './observable/observable.service';

@Component({
  selector: 'app-strona-druga',
  templateUrl: './strona-druga.component.html',
  styleUrls: ['./strona-druga.component.scss']
})
export class StronaDrugaComponent implements OnInit {
  public weatherSearchForm: FormGroup;
  public weatherData: any;
  blad: string;
  czyGrzybowac: boolean = false;
  czyPuste: boolean = true;

  grzyby: Grzyb[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private apixuService: ApixuService,
    private observable: ObservableService
  ) { }

  ngOnInit() {
    this.weatherSearchForm = this.formBuilder.group({
      location: [""]
    });

    const studentsObservable = this.observable.getGrzyby();
    studentsObservable.subscribe((grzybyDane: Grzyb[]) => {
      this.grzyby = grzybyDane;
    });
  }

  sendToAPIXU(formValues) {
    this.apixuService.getWeather(formValues.location).subscribe(data => {
      this.weatherData = data;
      if (this.weatherData.success == false) {
        this.blad = "(Nie ma takiej lokacji w bazie pogody)";

      } else {
        this.czyPuste = false;
        this.blad = "";
        this.czyGrzybowac = false;
        if (this.weatherData.current.temperature > 5) {
          this.czyGrzybowac = true;
        } else {
          this.czyGrzybowac = false;
        }
        console.log(this.weatherData);
      }
    });
  }


}


