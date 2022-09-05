import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_URL = 'https://api.realworld.io/api';

interface RegisterUserPayload {
  username: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private readonly http: HttpClient) { }

  register(payload: RegisterUserPayload) {
    return this.http.post<{username: string}>(`${API_URL}/users`, { user: payload });
  }
}
