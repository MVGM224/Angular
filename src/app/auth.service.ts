import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import{HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  submit(data: any){
    return this.http.post<any>( 'https://reqres.in/api/login', data)
  }
}
