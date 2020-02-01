import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApixuService } from './apixu.service';
import { Komunikaty } from './observable/komunikaty.model';
import { ObservableService } from './observable/observable.service';

@Component({
  selector: 'app-strona-druga',
  templateUrl: './strona-druga.component.html',
  styleUrls: ['./strona-druga.component.scss']
})
export class StronaDrugaComponent implements OnInit {
  public weatherSearchForm: FormGroup;
  public weatherData: any;
  tak: String;
  nie: String;
  brakLokacji: String;
  czyPuste: boolean = true;

  constructor(
    private formBuilder: FormBuilder,
    private apixuService: ApixuService,
    private observable: ObservableService
  ) { }

  ngOnInit() {
    this.weatherSearchForm = this.formBuilder.group({
      location: [""]
    });

  }

  sendToAPIXU(formValues) {
    this.apixuService.getWeather(formValues.location).subscribe(data => {
      const studentsObservable = this.observable.getGrzyby();
      this.weatherData = data;

      if (this.weatherData.success == false) {
        this.czyPuste = false;
        studentsObservable.subscribe((komunikat: Komunikaty[]) => {
          this.brakLokacji = komunikat[0].nazwa;
          this.tak = "";
          this.nie = "";
        });

      } else {
        this.czyPuste = false;

        if (this.weatherData.current.temperature > 5) {
          studentsObservable.subscribe((komunikat: Komunikaty[]) => {
            this.tak = komunikat[1].nazwa;
            this.nie = "";
            this.brakLokacji = "";
          });
        } else {
          studentsObservable.subscribe((komunikat: Komunikaty[]) => {
            this.tak = "";
            this.nie = komunikat[2].nazwa;
            this.brakLokacji = "";
          });
        }
        console.log(this.weatherData);
      }
    });
  }


}


