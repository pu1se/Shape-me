import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {ProductItemModel} from "../../../_core/models/product-item.model";
declare var $:any;

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input() item: ProductItemModel;
  @Input() index: number;
  @Output() onChange = new EventEmitter();

  isActive = false;
  animating = false;

  constructor() { }

  ngOnInit() {
  }

  onClick(){

    //hack: not make image bigger, if device is a mobile phone
    if ($(".menu-button").is(":visible"))
      return;

    if (!this.isActive){
      this.onChange.emit();
    }

    this.isActive = !this.isActive;
  }
}
