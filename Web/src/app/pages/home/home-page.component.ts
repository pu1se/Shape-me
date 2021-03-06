import { Component, OnInit } from '@angular/core';
import {ProductGroupModel} from "../../_core/models/product-group.model";
import {ProductItemModel} from "../../_core/models/product-item.model";
import {ProductGroupService} from "../../_core/services/product-group.service";
import {NgxCarousel, NgxCarouselStore} from "ngx-carousel";
import {Title, Meta} from "@angular/platform-browser";
declare var $: any;

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  groupList: ProductGroupModel[];

  constructor(private productGroupService: ProductGroupService,
              private title: Title,
              private meta: Meta

  ) {
    title.setTitle('Bonn Ceramic | Производство изделий из керамики');
    meta.addTags([
      {name: 'keyword', content: 'купить керамику в Минске, скульптуры, фонтаны, плитки, сувениры, кашпо, вазоны, горшки, керамика, декаративный фасад, керамическое изделие под заказ'},
      {name: 'title', content: 'Керамика'},
      {name: 'description', content: 'Изготовление керамики, архитектурный декор, ландшафтная керамика, садовая керамика.'}
    ]);
  }

  ngOnInit() {
    this.groupList = this.productGroupService.getList();

    if ($(".menu-button").is(":visible"))
    {
      $(".navbar-nav").slideUp();
      $(".menu-button").removeClass("active");
    }
  }

}
