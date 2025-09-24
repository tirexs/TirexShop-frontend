import { Injectable } from '@angular/core';
import { BehaviorSubject, tap  } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpParams } from '@angular/common/http'
import { environment } from '../../../../environments/environment'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private keycloakUrl = environment.keycloakUrl + "realms/TirexShop/protocol/openid-connect/auth";
  private clientId = "frontend";
  private redirectUri = environment.production ? "http://TirexShopFrontend:80/callback" : "http://localhost:4200/callback"; // где примем ответ
  private tokenUrl = environment.keycloakUrl + 'realms/TirexShop/protocol/openid-connect/token';

  public isAuthorized = new BehaviorSubject<boolean>(false)

  constructor(private cookieService: CookieService, private http: HttpClient) {
    if(this.cookieService.get('access_token')){
      this.isAuthorized.next(true)
    }
  }

  redirectToAuth(){

    window.location.href =
      `${this.keycloakUrl}?client_id=${this.clientId}` +
      `&response_type=code` +
      `&scope=openid profile email` +
      `&redirect_uri=${encodeURIComponent(this.redirectUri)}`;
  }

  logout(){
    // очистка токенов
    if(this.cookieService.get('access_token')){
      this.cookieService.delete('access_token')
    }

    if(this.cookieService.get('refresh_token')){
      this.cookieService.delete('refresh_token')
    }

    // редирект на Keycloak logout
    const redirectUri = encodeURIComponent(window.location.origin + '/');
    window.location.href = environment.keycloakUrl + `realms/TirexShop/protocol/openid-connect/logout?redirect_uri=${redirectUri}`;

    this.isAuthorized.next(false)
  }

  exchangeCodeForToken(code: string) {
    const body = new HttpParams()
      .set('grant_type', 'authorization_code')
      .set('code', code)
      .set('redirect_uri', this.redirectUri)
      .set('client_id', this.clientId);

    return this.http.post<any>(this.tokenUrl, body).pipe(
      tap(tokens => {
        if(this.cookieService.get('access_token')){
          this.cookieService.delete('access_token')
          this.cookieService.set('access_token', tokens.access_token, { secure: true })
        }
        else{
          this.cookieService.set('access_token', tokens.access_token, { secure: true })
        }

        if(this.cookieService.get('refresh_token')){
          this.cookieService.delete('refresh_token')
          this.cookieService.set('refresh_token', tokens.access_token, { secure: true })
        }
        else{
          this.cookieService.set('refresh_token', tokens.refresh_token, { secure: true })
        }

        this.isAuthorized.next(true)
      })
    );
  }
}
