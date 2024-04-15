import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import {
  RegisterDto,
  RegisterResponseDto,
  SignInDto,
  SignInResponseDto,
} from '../models/interfaces/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private readonly http: HttpClient) {}

  signIn(signInDto: SignInDto): Observable<SignInResponseDto> {
    return this.http.post<SignInResponseDto>(
      `${environment.apiUrl}/auth/sign-in`,
      signInDto,
    );
  }

  register(registerDto: RegisterDto): Observable<RegisterResponseDto> {
    return this.http.post<RegisterResponseDto>(
      `${environment.apiUrl}/auth/register`,
      registerDto,
    );
  }
}
