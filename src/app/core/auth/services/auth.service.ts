import { HttpService } from './../../services/http.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  public isAuthorized = new BehaviorSubject<boolean>(false)

  constructor(private cookieService: CookieService, private httpService: HttpService) {}

  userAuthorization(username: string, password: string){
    this.httpService.post("auth/Identity/UserAuthorization", {username: username, password: password}).subscribe({
      next: (result) => {
        if(this.cookieService.get('token')){
          this.cookieService.delete('token')
          this.cookieService.set('token', result!.jwtToken, { secure: true })
        }
        else{
          this.cookieService.set('token', result!.jwtToken, { secure: true })
        }
        this.isAuthorized.next(true)
      },
      error: (err) => {
        console.error(err)
      },
    })
  }

  userRegistration(username: string, email: string, password: string){
    this.httpService.post("auth/Identity/UserRegistration", {username: username, email: email, password: password}).subscribe({
      next: (result) => {
        console.log(result)
      },
      error: (err) => {
        console.error(err)
      },
    })
  }

  logout(){
    this.cookieService.delete('token')
    this.isAuthorized.next(false)
  }
}
