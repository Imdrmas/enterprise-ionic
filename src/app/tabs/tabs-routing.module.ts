import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'add-user',
        loadChildren: () => import('../add-user/add-user.module').then( m => m.AddUserPageModule)
      },
      {
        path: 'find-enterprises',
        loadChildren: () => import('../find-enterprises/find-enterprises.module').then( m => m.FindEnterprisesPageModule)
      },
      {
        path: 'find-applications',
        loadChildren: () => import('../find-applications/find-applications.module').then( m => m.FindApplicationsPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/add-user',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/add-user',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
