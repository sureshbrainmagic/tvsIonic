import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PlungerPageRoutingModule } from './plunger-routing.module';
import { PlungerPage } from './plunger.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlungerPageRoutingModule
  ],
  declarations: [PlungerPage]
})
export class PlungerPageModule {}
