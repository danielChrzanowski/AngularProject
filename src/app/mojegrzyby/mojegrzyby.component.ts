import { Component, OnInit } from '@angular/core';
import { SerwisService } from './services/serwis.service';

@Component({
  selector: 'app-mojegrzyby',
  templateUrl: './mojegrzyby.component.html',
  styleUrls: ['./mojegrzyby.component.scss']
})
export class MojegrzybyComponent implements OnInit {


  constructor(private serwis: SerwisService) {
  }

  ngOnInit() {
  }

}
