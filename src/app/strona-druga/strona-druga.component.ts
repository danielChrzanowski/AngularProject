import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApixuService } from './apixu.service';

@Component({
  selector: 'app-strona-druga',
  templateUrl: './strona-druga.component.html',
  styleUrls: ['./strona-druga.component.scss']
})
export class StronaDrugaComponent implements OnInit {
  public weatherSearchForm: FormGroup;
  public weatherData: any;
  blad: string;

  constructor(
    private formBuilder: FormBuilder,
    private apixuService: ApixuService
  ) { }

  ngOnInit() {
    this.weatherSearchForm = this.formBuilder.group({
      location: [""]
    });
  }

  sendToAPIXU(formValues) {
    this.apixuService.getWeather(formValues.location).subscribe(data => {
      this.weatherData = data;
      if (this.weatherData.success == false) {
        this.blad = "(Nie ma takiej lokacji w bazie pogody)";
      } else {
        this.blad = "";
        console.log(this.weatherData);
      }
    });
  }


}


