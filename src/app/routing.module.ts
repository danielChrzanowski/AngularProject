import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StronaPierwszaComponent } from './strona-pierwsza/strona-pierwsza.component';
import { StronaDrugaComponent } from './strona-druga/strona-druga.component';

const routes: Routes = [
  { path: 'strona-pierwsza', component: StronaPierwszaComponent },
  { path: 'strona-druga', component: StronaDrugaComponent }
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

export const routingComponents=[StronaPierwszaComponent, StronaDrugaComponent]