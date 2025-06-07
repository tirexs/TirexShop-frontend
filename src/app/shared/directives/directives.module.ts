import { NgModule } from '@angular/core'
import { DoubleClickDirective } from './double-click/double-click.directive';
import { OpenNewTabDirective } from './open-new-tab/open-new-tab.directive';



@NgModule({
  declarations: [
    DoubleClickDirective,
    OpenNewTabDirective
  ],
  exports: [
    DoubleClickDirective,
    OpenNewTabDirective
  ],
})
export class DirectivesModule {}