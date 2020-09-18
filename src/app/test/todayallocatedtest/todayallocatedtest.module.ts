import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TodayallocatedtestPageRoutingModule } from './todayallocatedtest-routing.module';
import { TodayallocatedtestPage } from './todayallocatedtest.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    Ng2SearchPipeModule,
    TodayallocatedtestPageRoutingModule
  ],
  declarations: [TodayallocatedtestPage]
})
export class TodayallocatedtestPageModule {}
