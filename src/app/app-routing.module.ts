import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import {CallbackComponent} from "./core/auth/Callback/callback.component";

const routes: Routes = [
  {
    path: 'profile',
    loadChildren: () =>
      import('./features/profile/profile.module').then((m) => m.ProfileModule),
  },
  { path: 'callback', component: CallbackComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
