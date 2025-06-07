import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    usernameValue: new FormControl('', Validators.required),
    passwordValue: new FormControl('', Validators.required),
    emailValue: new FormControl('', Validators.required),
  });

  constructor(private authService: AuthService){

  }

  ngOnInit(): void {
  }

  registerClick(){
    this.authService.userRegistration(this.registerForm.get('usernameValue')?.value!, this.registerForm.get('emailValue')?.value!, this.registerForm.get('passwordValue')?.value!)
  }
}
