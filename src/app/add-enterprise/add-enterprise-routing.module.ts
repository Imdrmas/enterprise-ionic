import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddEnterprisePage } from './add-enterprise.page';

const routes: Routes = [
  {
    path: '',
    component: AddEnterprisePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddEnterprisePageRoutingModule {}
