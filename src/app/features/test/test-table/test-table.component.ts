import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ITestData } from '../../../core/models/interfaces/ITestData';

@Component({
  selector: 'app-test-table',
  templateUrl: './test-table.component.html',
  styleUrl: './test-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestTableComponent implements OnInit {

  @Input() testData: ITestData[] = [];
  readonly columns = ['Id', 'Name', 'Description'];

  constructor(){

  }

  ngOnInit(): void {

    setTimeout(() => {
    }, 1000);
  }

  get getData(){
    return this.testData === null || this.testData === undefined ? [] : this.testData!
  }

}
