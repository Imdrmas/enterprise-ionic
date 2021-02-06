import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FindApplicationsPage } from './find-applications.page';

const routes: Routes = [
  {
    path: '',
    component: FindApplicationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FindApplicationsPageRoutingModule {}
