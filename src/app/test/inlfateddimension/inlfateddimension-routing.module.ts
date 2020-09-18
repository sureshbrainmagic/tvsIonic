import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InlfateddimensionPage } from './inlfateddimension.page';

const routes: Routes = [
  {
    path: '',
    component: InlfateddimensionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InlfateddimensionPageRoutingModule {}
