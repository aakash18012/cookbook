import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { catchError, map, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
url = 'http://localhost:8080'
  constructor(private http: HttpClient) { }

  login(obj: {username:string, password:string}){
    return this.http.post(this.url + '/user/login', obj).pipe(
      map(res=>{
        return res
      }),
      catchError((error) => {
        console.log("errrrrrrrrrrrrrrrrrr")
        return throwError(() => error);
      }),
    )
  }

  signup(loginobj : {userName: string,password: number, email: any
  }){
    return this.http.post(this.url + '/user/signup', loginobj)
  }
}
