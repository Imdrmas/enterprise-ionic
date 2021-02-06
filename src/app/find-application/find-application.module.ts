import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FindApplicationPageRoutingModule } from './find-application-routing.module';

import { FindApplicationPage } from './find-application.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FindApplicationPageRoutingModule
  ],
  declarations: [FindApplicationPage]
})
export class FindApplicationPageModule {}
