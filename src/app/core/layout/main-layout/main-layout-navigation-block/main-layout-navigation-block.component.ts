import { AuthService } from './../../../auth/services/auth.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import { INavTab } from '../../../models/interfaces/general/INavTab'

@Component({
  selector: 'app-main-layout-navigation-block',
  templateUrl: './main-layout-navigation-block.component.html',
  styleUrls: ['./main-layout-navigation-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainLayoutNavigationBlockComponent implements OnInit{

  public isAuthorized = new BehaviorSubject<boolean>(false)
  public isTabsDisabled = new BehaviorSubject<boolean>(false)
  public navigationTabsArray: INavTab[] = [
    { name: 'Тест', link: 'test', isDisabled: false, iconName: 'home' },
  ]

  public accountNavigationButtonArray: INavTab[] = [
    {
      name: 'Заказы',
      link: 'auth/login',
      isDisabled: true,
      iconName: 'lan',
    }
  ]

  constructor(private authService: AuthService,) {}

  ngOnInit(): void {
    this.authService.isAuthorized.subscribe(res => {
      this.isAuthorized.next(res)
    })
  }

  ChangeMode(): void {
    this.isTabsDisabled.next(true)
    setTimeout(() => {
      this.isTabsDisabled.next(false)
    }, 1000)
  }

  redirectToAuth(){
    this.authService.redirectToAuth()
  }

  logout(){
    this.authService.logout()
  }
}

