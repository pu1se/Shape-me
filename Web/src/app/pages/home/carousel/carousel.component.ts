import {Component, Input, OnInit} from '@angular/core';
import {NgxCarousel, NgxCarouselStore} from "ngx-carousel";
import {ProductItemModel} from "../../../models/product-item.model";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  @Input() list: ProductItemModel[];

  constructor() { }

  ngOnInit() {
  }

  get carouselConfig(): NgxCarousel {
    const caourselConfig: NgxCarousel = {
      grid: { xs: 1, sm: 2, md: 3, lg: 4, all: 0 },
      speed: 600,
      interval: 10000,
      point: {
        visible: true
      },
      load: 1,
      loop: false,
      touch: false,
      easing: 'ease',
      animation: 'lazy',
    };
    return caourselConfig;
  }

}
