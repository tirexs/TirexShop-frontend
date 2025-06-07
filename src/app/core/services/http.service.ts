import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  public headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  })
  public isConnected = false
  constructor(private http: HttpClient) {
  }

  get(url: string): Observable<any> {
    return this.http.get(environment.urlToBackEnd + 'api/' + url, {
      headers: this.headers,
    })
  }

  getWithParameters(url: string, parameterName: string[], parameterValue: string[]): Observable<any> {
    let fullUrl = ''
    if(parameterName.length == 1 && parameterValue.length == 1)
      fullUrl = environment.urlToBackEnd + 'api/' + url + '?' + parameterName[0] + '=' + parameterValue[0]
    else{
      fullUrl = environment.urlToBackEnd + 'api/' + url + '?'
      for(let i = 0; i<parameterName.length; i++){
        fullUrl+= parameterName[i] + '=' + parameterValue[i] + '&'
      }
      fullUrl = fullUrl.substring(0, fullUrl.length -1)
    }

    return this.http.get(fullUrl, {
      headers: this.headers,
    })
  }

  post(url: string, body: any): Observable<any> {
    return this.http.post(
      environment.urlToBackEnd + 'api/' + url,
      JSON.stringify(body),
      {
        headers: this.headers,
      }
    )
  }

  delete(url: string): Observable<any> {
    return this.http.delete(environment.urlToBackEnd + 'api/' + url, {
      headers: this.headers,
    })
  }

  postUrl(url: string): Observable<any> {
    return this.http.post(
      environment.urlToBackEnd + 'api/' + url,
      JSON.stringify(null),
      {
        headers: this.headers,
      }
    )
  }

  postUpload(url: string, data: FormData): Observable<any> {
    return this.http.post(environment.urlToBackEnd + 'api/' + url, data, {
      reportProgress: true,
    })
  }

  checkConnection(): void {
    this.http
      .get(environment.urlToBackEnd + 'api/config/CheckConnection')
      .subscribe({
        next: (response) => {
          if (response === 200) {
            this.isConnected = true
          }
        },
        error: (err) => console.error(err),
      })
  }
}
