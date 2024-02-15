// core-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreComponent } from './core.component';

const routes: Routes = [
  {
    path: '', component: CoreComponent,
    children: [
      {
        path: 'departement', loadChildren: () => import('./feature/departement/departement.module').then(m => m.DepartementModule)
      },
      {
        path: '', loadChildren: () => import('./feature/user/user.module').then(m => m.UserModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }

