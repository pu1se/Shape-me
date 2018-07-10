import { Component, OnInit } from '@angular/core';
import {Title, Meta} from "@angular/platform-browser";
declare var $:any;

@Component({
  selector: 'app-about-us-page',
  templateUrl: './about-us-page.component.html',
  styleUrls: ['./about-us-page.component.scss']
})
export class AboutUsPageComponent implements OnInit {

  constructor(
    private title: Title,
    private meta: Meta
  ) {
    title.setTitle('Bonn Ceramic');
    meta.addTags([
      {name: 'keyword', content: 'Bonn Ceramic адрес, Bonn Ceramic телефон'},
      {name: 'title', content: 'Bonn Ceramic'},
      {name: 'description', content: 'Контакты и адреса Bonn Ceramic.'}
    ]);
  }

  ngOnInit() {
    if ($(".menu-button").is(":visible"))
    {
      $(".navbar-nav").slideUp();
      $(".menu-button").removeClass("active");
    }

  }

}
