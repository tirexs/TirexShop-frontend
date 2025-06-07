import { AuthService } from '../../services/auth.service';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {

  constructor(private authService: AuthService, private router: Router) {}

  loginForm = new FormGroup({
      usernameValue: new FormControl('', Validators.required),
      passwordValue: new FormControl('', Validators.required),
  });

  loginClick(){
    this.authService.userAuthorization(this.loginForm.get("usernameValue")?.value!, this.loginForm.get("passwordValue")?.value!)
    this.router.navigateByUrl("/test");
  }

  goToRegister(){
    this.router.navigateByUrl("/auth/register");
  }
}
