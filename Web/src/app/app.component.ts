import { Component } from '@angular/core';
import {ProductGroupService} from "./services/product-group.service";
import {KeyValue} from "./models/key-value";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  navigationLinkList: KeyValue[];

  constructor(private productGroupService: ProductGroupService) {
    this.navigationLinkList = productGroupService.getNavigationLinkList();
  }

}
