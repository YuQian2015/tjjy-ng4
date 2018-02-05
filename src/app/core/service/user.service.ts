import { Injectable } from '@angular/core';
import { url,api } from '../config/api.config';
import { ApiService } from './api.service';

@Injectable()
export class UserService {
  constructor(private apiService: ApiService) { }

  // 注册
  signUp(requestBody) {
    return this.apiService.post(`${url.baseUrl}${api.signup}`, requestBody)
  }
  // 登录
  signIn(requestBody) {
    return this.apiService.post(`${url.baseUrl}${api.signin}`, requestBody)
  }
}
