import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { InlfateddimensionPageRoutingModule } from './inlfateddimension-routing.module';
import { InlfateddimensionPage } from './inlfateddimension.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    InlfateddimensionPageRoutingModule
  ],
  declarations: [InlfateddimensionPage]
})
export class InlfateddimensionPageModule {}
