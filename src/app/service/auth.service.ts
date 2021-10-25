import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment.prod';
import {SignUpForm} from '../model/SignUpForm';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
//API REGISTER
API_SIGNUP = environment.API_SERVER + 'signup';
  constructor(private http: HttpClient) { }
  signUp(signUpForm: SignUpForm): Observable<SignUpForm>{
    return this.http.post<SignUpForm>(this.API_SIGNUP, signUpForm);
  }
}
