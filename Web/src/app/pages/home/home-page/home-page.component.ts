import { Component, OnInit } from '@angular/core';
import {ProductGroupModel} from "../../../models/product-group.model";
import {ProductItemModel} from "../../../models/product-item.model";
import {ProductGroupService} from "../../../services/product-group.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  groupList: ProductGroupModel[];

  constructor(private productGroupService: ProductGroupService) { }

  ngOnInit() {

    this.groupList = this.productGroupService.getList();

  }

}
