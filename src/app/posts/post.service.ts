import { Injectable } from '@angular/core';
import { url, api } from '../core/config/api.config';
import { ApiService } from '../core/service/api.service';


@Injectable()
export class PostService {

  constructor(private apiService: ApiService) { }

  // 获取文章
  getPostList(requestBody) {
    return this.apiService.post(`${url.baseUrl}${api.getPostList}`, requestBody)
  }

  // 添加文章
  addPostList(requestBody) {
    return this.apiService.post(`${url.baseUrl}${api.addPost}`, requestBody)
  }

  // 查看文章
  viewPost(requestBody) {
    return this.apiService.post(`${url.baseUrl}${api.getPost}`, requestBody)
  }
}
