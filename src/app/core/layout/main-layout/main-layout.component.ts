import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
  AfterViewInit,
} from '@angular/core'
import { Router } from '@angular/router';
import { TuiDestroyService, TUI_IS_ANDROID, TUI_IS_IOS } from '@taiga-ui/cdk'
import { BehaviorSubject,  } from 'rxjs'

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: TUI_IS_IOS,
      useValue: false,
    },
    {
      provide: TUI_IS_ANDROID,
      useValue: false,
    },
    TuiDestroyService,
  ],
})
export class MainLayoutComponent implements OnInit, OnDestroy, AfterViewInit {
  public skeleton$ = new BehaviorSubject<boolean>(true)

  constructor(private router: Router) {}

  ngOnInit(): void {


  }

  ngOnDestroy(): void {
  }

  ngAfterViewInit(): void {
  }

  isAuthPage(): boolean {
    return this.router.url === '/auth' || this.router.url === '/auth/login' || this.router.url === '/auth/register' ? true : false;
  }


}

