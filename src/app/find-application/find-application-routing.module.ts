import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FindApplicationPage } from './find-application.page';

const routes: Routes = [
  {
    path: '',
    component: FindApplicationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FindApplicationPageRoutingModule {}
