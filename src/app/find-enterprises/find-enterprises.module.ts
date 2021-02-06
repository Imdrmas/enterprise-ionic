import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FindEnterprisesPageRoutingModule } from './find-enterprises-routing.module';

import { FindEnterprisesPage } from './find-enterprises.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FindEnterprisesPageRoutingModule
  ],
  declarations: [FindEnterprisesPage]
})
export class FindEnterprisesPageModule {}
