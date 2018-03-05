import { Component, OnInit } from '@angular/core';
import {ProductGroupModel} from "../../../models/product-group.model";
import {ProductItemModel} from "../../../models/product-item.model";
import {ProductGroupService} from "../../../services/product-group.service";
import {NgxCarousel, NgxCarouselStore} from "ngx-carousel";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  groupList: ProductGroupModel[];
  introductionList: any[];

  constructor(private productGroupService: ProductGroupService) { }

  ngOnInit() {

    this.groupList = this.productGroupService.getList();

    this.introductionList =  [
      {imageUrl: 'https://img1.liveinternet.ru/images/attach/c/6/92/919/92919523_large_d2be8d7272cf.jpg', text: 'hello'},
      {imageUrl: 'https://img1.liveinternet.ru/images/attach/c/10/110/218/110218457_large_R_RRRRRR_2.jpg', text: 'hello'},
      {imageUrl: 'https://img1.liveinternet.ru/images/attach/c/6/89/863/89863303_large_000070.jpg', text: 'hello'},
      {imageUrl: 'http://3.bp.blogspot.com/-cB1M4_GdhCg/Ucl3BQvhyII/AAAAAAAAz8A/nH6beKrO8DA/s1600/Stephanie_Birdsall_17.jpg', text: 'hello'}
    ];
  }

}
