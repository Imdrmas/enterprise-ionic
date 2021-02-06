import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'add-enterprise',
    loadChildren: () => import('./add-enterprise/add-enterprise.module').then( m => m.AddEnterprisePageModule)
  },
  {
    path: 'add-application/:id',
    loadChildren: () => import('./add-application/add-application.module').then( m => m.AddApplicationPageModule)
  },
  {
    path: 'find-enterprise/:id',
    loadChildren: () => import('./find-enterprise/find-enterprise.module').then( m => m.FindEnterprisePageModule)
  },
  {
    path: 'find-application/:id',
    loadChildren: () => import('./find-application/find-application.module').then( m => m.FindApplicationPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
