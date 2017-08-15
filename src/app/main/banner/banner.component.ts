import { Component, OnInit } from '@angular/core';

import { BannerService } from '../../core/service/banner.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  providers: [BannerService]
})
export class BannerComponent implements OnInit {

  bannerImages;
  constructor(private bannerService: BannerService) { }

  ngOnInit() {
    this.bannerImages = this.bannerService.getBanners();
  }

}
