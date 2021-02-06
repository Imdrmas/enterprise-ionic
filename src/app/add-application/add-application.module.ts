import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddApplicationPageRoutingModule } from './add-application-routing.module';

import { AddApplicationPage } from './add-application.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddApplicationPageRoutingModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  declarations: [AddApplicationPage]
})
export class AddApplicationPageModule {}
