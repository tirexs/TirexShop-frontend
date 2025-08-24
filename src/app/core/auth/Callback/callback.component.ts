// callback.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-callback',
  template: `` // Можно добавить спиннер
})
export class CallbackComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    const url = new URL(window.location.href);
    const code = url.searchParams.get('code');

    if (!code) {
      // Если кто-то перешёл сюда вручную — редирект на home
      this.router.navigate(['/']);
      return;
    }

    // Обменяем code на токен
    this.auth.exchangeCodeForToken(code).subscribe({
      next: () => {
        // Убираем code из URL
        url.searchParams.delete('code');
        window.history.replaceState({}, document.title, url.toString());

        // Редирект на основной роут после успешной авторизации
        this.router.navigate(['/']);
      },
      error: () => {
        // Если что-то пошло не так, редирект на страницу ошибки или home
        this.router.navigate(['/']);
      }
    });
  }
}
