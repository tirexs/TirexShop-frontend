import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestComponent implements OnInit {


  constructor( private cdr: ChangeDetectorRef){

  }

  ngOnInit(): void {
  }
}
