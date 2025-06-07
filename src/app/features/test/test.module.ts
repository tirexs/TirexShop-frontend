import { TestRoutingModule } from './test-routing.module';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../shared/shared.module';

import { NgModule } from '@angular/core'
import { TestComponent } from './test.component';
import { TestTableComponent } from './test-table/test-table.component';
@NgModule({
  declarations: [TestComponent, TestTableComponent],
  imports: [SharedModule, CommonModule, TestRoutingModule],
  exports: [TestComponent]
})
export class TestModule { }
