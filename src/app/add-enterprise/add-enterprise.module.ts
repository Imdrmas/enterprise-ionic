import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddEnterprisePageRoutingModule } from './add-enterprise-routing.module';

import { AddEnterprisePage } from './add-enterprise.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddEnterprisePageRoutingModule
  ],
  declarations: [AddEnterprisePage]
})
export class AddEnterprisePageModule {}
