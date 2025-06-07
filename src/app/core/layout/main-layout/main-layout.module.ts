import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../../core.module';
import { MainLayoutComponent } from './main-layout.component';
import { MainLayoutNavigationBlockComponent } from './main-layout-navigation-block/main-layout-navigation-block.component';
@NgModule({
  declarations: [MainLayoutComponent, MainLayoutNavigationBlockComponent],
  imports: [
    CommonModule,
    CoreModule
  ],
  exports: [MainLayoutComponent]
})
export class MainLayoutModule { }
