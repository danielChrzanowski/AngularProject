import { Component, OnInit } from '@angular/core';
import { SerwisService } from 'src/app//mojegrzyby/services/serwis.service';

@Component({
  selector: 'app-mysl-input',
  templateUrl: './mysl-input.component.html',
  styleUrls: ['./mysl-input.component.scss']
})
export class MyslInputComponent implements OnInit {

  public myslTekst: string;
  alert: string;

  constructor(private serwis: SerwisService) {
    this.myslTekst = '';
  }

  ngOnInit() {
  }

  private addMysl(): void {
    if (this.serwis.addMysl(this.myslTekst)) {
      this.myslTekst = '';
      this.alert = '';
    } else {
      this.alert = 'Myśl powinna zawierać od 1 do 58 znaków!';
    }
  }

}
