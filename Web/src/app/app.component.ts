import {Component, OnInit} from '@angular/core';
import {ProductGroupService} from "./_core/services/product-group.service";
import {KeyValue} from "./_core/models/key-value";
import {AuthService} from "./_core/services/auth.service";
import {ActivatedRoute, Params} from "@angular/router";
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  navigationLinkList: KeyValue[];
  menuActive: false;

  constructor(
    public productGroupService: ProductGroupService,
    public auth: AuthService,
    private route: ActivatedRoute
    )
  {
    this.navigationLinkList = productGroupService.getNavigationLinkList();
  }

  ngOnInit() {

    if ($(".menu-button").is(":visible"))
    {
      $(".main").click(function(){
        $(".navbar-nav").slideUp();
        $(".menu-button").removeClass("active");
      });
    }

  }


  onLogOutClick(){
    this.auth.logout();
  }

  onMenuButtonClick(){
    if ($(".navbar-nav").is(":visible")){
      $(".navbar-nav").slideUp();
      $(".menu-button").removeClass("active");
    }else{
      $(".navbar-nav").slideDown();
      $(".menu-button").addClass("active");
    }

  }
}
