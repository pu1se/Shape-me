import { Component, OnInit } from '@angular/core';
import {ProductGroupModel} from "../../_core/models/product-group.model";
import {ProductGroupService} from "../../_core/services/product-group.service";
import {ActivatedRoute, Params} from "@angular/router";
import {Title, Meta} from "@angular/platform-browser";
declare var $: any;

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
})
export class ProductPageComponent implements OnInit {

  productItem: ProductGroupModel;

  constructor(private service: ProductGroupService,
              private route: ActivatedRoute,
              private title: Title,
              private meta: Meta
  )
  {

    this.route.params.subscribe((params: Params) =>{
      this.productItem = this.service.getItemByType(params['type']);
      title.setTitle(this.productItem.name+' из керамики');
      meta.addTags([
        {name: 'keyword', content: 'купить '+this.productItem.name+' в Минске, '+this.productItem.name},
        {name: 'title', content: this.productItem.name+' из керамики'},
        {name: 'description', content: this.productItem.name+' из керамики под заказ.'}
      ]);
    });
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) =>{
      window.scrollTo(0, 0);
      if ($(".menu-button").is(":visible"))
      {
        $(".navbar-nav").slideUp();
        $(".menu-button").removeClass("active");
      }
    });
  }

  onChange(){
    $(".active").click();
  }

}
