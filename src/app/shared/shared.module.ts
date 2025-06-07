import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { TuiModule } from './ui-frameworks-modules/tui.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { DirectivesModule } from './directives/directives.module'

@NgModule({
  exports: [
    CommonModule,
    RouterModule,
    TuiModule,
    FormsModule,
    ReactiveFormsModule,
    DirectivesModule,
  ],
})
export class SharedModule {}
