import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FindEnterprisePage } from './find-enterprise.page';

const routes: Routes = [
  {
    path: '',
    component: FindEnterprisePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FindEnterprisePageRoutingModule {}
