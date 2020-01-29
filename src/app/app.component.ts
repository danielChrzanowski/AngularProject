import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularProject';
  zaznaczony: string="";

  constructor(public translate: TranslateService){
    translate.setDefaultLang('pl');
  }
  switchLanguage(language: string) {
    this.translate.use(language);
  }
}
