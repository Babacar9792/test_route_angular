import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'core',
    outlet: 'feature',
    loadChildren: () => import('./core/core.module').then(m => m.CoreModule)

  },
  {
    path: '',
    loadChildren: () => import('./auth/auth.module').then(m => m.AutModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
