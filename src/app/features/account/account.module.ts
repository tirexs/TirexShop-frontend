import { AccountRoutingModule } from './account-routing.module';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core'
import { AccountComponent } from './account.component';

@NgModule({
  declarations: [AccountComponent ],
  imports: [SharedModule, CommonModule, AccountRoutingModule],
  exports: [AccountComponent]
})
export class AccountModule { }
