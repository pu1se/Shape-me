import { Component } from '@angular/core';
import {ProductGroupService} from "./_core/services/product-group.service";
import {KeyValue} from "./_core/models/key-value";
import {AuthService} from "./_core/services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  navigationLinkList: KeyValue[];

  constructor(public productGroupService: ProductGroupService, public auth: AuthService) {
    this.navigationLinkList = productGroupService.getNavigationLinkList();
  }


  onLogOutClick(){
    this.auth.logout();
  }
}
