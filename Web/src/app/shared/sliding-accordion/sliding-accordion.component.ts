import {Component, Input, OnInit} from '@angular/core';
import {ProductGroupModel} from "../../_core/models/product-group.model";
declare var $: any;

@Component({
  selector: 'app-sliding-accordion',
  templateUrl: './sliding-accordion.component.html',
  styleUrls: ['./sliding-accordion.component.scss']
})
export class SlidingAccordionComponent implements OnInit {

  @Input() list: ProductGroupModel[];

  constructor() { }

  ngOnInit() {
/*    for(let item of this.list){
      item.imgUrl = `url(${item.imgUrl})`;
    }*/
  }

  onClick(type: string){

    var target = $('#'+type);
    $('body,html').animate({
      scrollTop: target.offset().top - ($(window).height() / 2 - $(window).height() / 5)
    }, 1000);

    $('.collapse-container').each(function(){

      if($(this).find('.ngxcarousel-items').is(":visible")){
        $(this).find('.collapse-control').click();
      }


    });
    target.click();

  }
}
