import {Component, Input, OnInit} from '@angular/core';
import {ProductGroupModel} from "../../../models/product-group.model";
declare var $: any;

@Component({
  selector: 'app-collapse-panel',
  templateUrl: './collapse-panel.component.html',
  styleUrls: ['./collapse-panel.component.scss']
})
export class CollapsePanelComponent implements OnInit {

  isCollapsed = true;

  @Input() item: ProductGroupModel;

  constructor() { }

  ngOnInit() {

  }

}
