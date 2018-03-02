import { Component, OnInit } from '@angular/core';
import {ProductGroupModel} from "../../../models/product-group.model";
import {ProductGroupService} from "../../../services/product-group.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
})
export class ProductPageComponent implements OnInit {

  productItem: ProductGroupModel;

  constructor(private service: ProductGroupService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) =>{
      this.productItem = this.service.getItemByType(params['type']);
    });
  }

}
