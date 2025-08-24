import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import {CallbackComponent} from "./core/auth/Callback/callback.component";

const routes: Routes = [
  {
    path: 'test',
    loadChildren: () =>
      import('./features/test/test.module').then((m) => m.TestModule),
  },
  {
    path: 'account',
    loadChildren: () =>
      import('./features/account/account.module').then((m) => m.AccountModule),
  },
  { path: 'callback', component: CallbackComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
