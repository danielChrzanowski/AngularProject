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
  arrBirds: any = [];

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
      console.log(this.weatherData);
    });
  }
}


