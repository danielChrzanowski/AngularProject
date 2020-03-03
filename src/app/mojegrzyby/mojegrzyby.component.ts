import { Component, OnInit } from '@angular/core';
import { SerwisService } from './services/serwis.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mojegrzyby',
  templateUrl: './mojegrzyby.component.html',
  styleUrls: ['./mojegrzyby.component.scss']
})
export class MojegrzybyComponent {
  constructor(private serwis: SerwisService, private router: Router) {
  }

  przejdz() {
    this.router.navigate(["/dodaj-grzyb"]);
  }

}
