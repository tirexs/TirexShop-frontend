import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

const routes: Routes = [
  {
    path: 'test',
    loadChildren: () =>
      import('./features/test/test.module').then((m) => m.TestModule),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./core/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'account',
    loadChildren: () =>
      import('./features/account/account.module').then((m) => m.AccountModule),
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
