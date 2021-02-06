import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FindEnterprisePageRoutingModule } from './find-enterprise-routing.module';

import { FindEnterprisePage } from './find-enterprise.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FindEnterprisePageRoutingModule
  ],
  declarations: [FindEnterprisePage]
})
export class FindEnterprisePageModule {}
