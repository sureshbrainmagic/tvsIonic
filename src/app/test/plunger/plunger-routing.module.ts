import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlungerPage } from './plunger.page';

const routes: Routes = [
  {
    path: '',
    component: PlungerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlungerPageRoutingModule {}
