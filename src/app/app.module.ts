import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { CoreModule } from './core/core.module'

import { tuiIconsPathFactory, TuiRootModule, TUI_ICONS_PATH, TuiAlertModule } from '@taiga-ui/core'
import { TUI_LANGUAGE, TUI_RUSSIAN_LANGUAGE } from '@taiga-ui/i18n'
import { of } from 'rxjs'
import { MainLayoutModule } from './core/layout/main-layout/main-layout.module';
import { AppRoutingModule } from './app-routing.module'
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [AppComponent],
  imports: [MainLayoutModule, CoreModule, AppRoutingModule, TuiRootModule, TuiAlertModule, HttpClientModule],
  providers: [
    {
      provide: TUI_ICONS_PATH,
      useValue: tuiIconsPathFactory('assets/taiga-ui/icons/'),
    },
    {
      provide: TUI_LANGUAGE,
      useValue: of(TUI_RUSSIAN_LANGUAGE),
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
