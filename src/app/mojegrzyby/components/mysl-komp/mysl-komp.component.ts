import { Component, OnInit, Input } from '@angular/core';
import { Mysl } from 'src/app/mojegrzyby/classes/mysl';
import { SerwisService } from 'src/app/mojegrzyby/services/serwis.service';

@Component({
  selector: 'app-mysl-komp',
  templateUrl: './mysl-komp.component.html',
  styleUrls: ['./mysl-komp.component.scss']
})

export class MyslKompComponent implements OnInit {
  @Input()
  private mysl: Mysl;

  constructor(private serwis: SerwisService) {
  }

  ngOnInit() {
  }

  private removeMysl(): void {
    this.serwis.removeMysl(this.mysl.id);
  }

}
