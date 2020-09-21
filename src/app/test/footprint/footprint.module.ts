import { ComponentsModule } from 'src/app/components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FootprintPageRoutingModule } from './footprint-routing.module';
import { FootprintPage } from './footprint.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    FootprintPageRoutingModule
  ],
  declarations: [FootprintPage]
})
export class FootprintPageModule {}
