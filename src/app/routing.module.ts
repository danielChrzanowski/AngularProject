import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StronaPierwszaComponent } from './strona-pierwsza/strona-pierwsza.component';
import { StronaDrugaComponent } from './strona-druga/strona-druga.component';
import { MainComponent } from './main/main.component';
import { MojegrzybyComponent } from './mojegrzyby/mojegrzyby.component';

const routes: Routes = [
  { path: 'strona-pierwsza', component: StronaPierwszaComponent },
  { path: 'strona-druga', component: StronaDrugaComponent },
  { path: 'main', component: MainComponent },
  { path: 'mojegrzyby', component: MojegrzybyComponent },
  { path: '', redirectTo: 'main', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class RoutingModule { }

export const routingComponents = [StronaPierwszaComponent, StronaDrugaComponent, MainComponent, MojegrzybyComponent]