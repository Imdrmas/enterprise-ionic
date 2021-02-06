import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FindEnterprisesPage } from './find-enterprises.page';

const routes: Routes = [
  {
    path: '',
    component: FindEnterprisesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FindEnterprisesPageRoutingModule {}
