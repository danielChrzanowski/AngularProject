import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MojegrzybyComponent } from './mojegrzyby.component';
import { MyslInputComponent } from './components/mysl-input/mysl-input.component';
import { MyslKompComponent } from './components/mysl-komp/mysl-komp.component';
import { SerwisService } from './services/serwis.service';



@NgModule({
  declarations: [
    MojegrzybyComponent
  ],
  imports: [
    CommonModule,
    MyslInputComponent,
    MyslKompComponent
  ],
  exports: [
    MojegrzybyComponent,
    MyslInputComponent,
    MyslKompComponent
  ],
  providers: [SerwisService]

})
export class MojegrzybyModule { }
