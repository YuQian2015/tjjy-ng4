import { Injectable } from '@angular/core';

import { url } from '../config/api.config';

@Injectable()
export class BannerService {

  constructor() { }


  getBanners(){
    return [
      {
        url: url.nginx+'/static/images/01.jpg'
      },{
        url: url.nginx+'/static/images/02.jpg'
      }
    ]
  }
}
