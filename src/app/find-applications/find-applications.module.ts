import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FindApplicationsPageRoutingModule } from './find-applications-routing.module';

import { FindApplicationsPage } from './find-applications.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FindApplicationsPageRoutingModule
  ],
  declarations: [FindApplicationsPage]
})
export class FindApplicationsPageModule {}
