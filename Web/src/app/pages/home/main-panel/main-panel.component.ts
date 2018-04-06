import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-main-panel',
  templateUrl: './main-panel.component.html',
  styleUrls: ['./main-panel.component.scss']
})
export class MainPanelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onArrowClick(){
    const target = $('app-collapse-panel:first');
    $('body,html').animate({
      scrollTop: target.offset().top - ($(window).height() / 2 - $(window).height() / 5)
    }, 1000);
  }

}
