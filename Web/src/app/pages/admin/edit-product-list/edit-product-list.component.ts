import { Component, OnInit } from '@angular/core';
import {TemplateRef, ViewChild} from '@angular/core';
import {ApiService} from "../../../_core/services/api.service";
import {ProductGroupModel} from "../../../_core/models/product-group.model";
import {ProductGroupService} from "../../../_core/services/product-group.service";

@Component({
  selector: 'app-edit-product-list',
  templateUrl: './edit-product-list.component.html',
  styleUrls: ['./edit-product-list.component.scss']
})
export class EditProductListComponent implements OnInit {

  @ViewChild('viewItemTemplate')
  viewItemTemplate: TemplateRef<any>;

  @ViewChild('editItemTemplate')
  editItemTemplate: TemplateRef<any>;

  editedItem: ProductGroupModel;

  isNewRecord: boolean;

  list: ProductGroupModel[] = new Array<ProductGroupModel>();


  constructor(private service: ProductGroupService) { }

  ngOnInit() {

    this.service.getProductGroupList().subscribe(
      response =>{

        this.list = response;

      }
    )

  }

  loadTemplate(item: ProductGroupModel){
    if (this.editedItem && this.editedItem.productGroupId == item.productGroupId)
      return this.editItemTemplate;

    return this.viewItemTemplate;
  }

  onEditClick(item: ProductGroupModel){
    this.editedItem = new ProductGroupModel(
      item.productGroupId,
      item.name,
      item.link,
      item.productType,
      item.productList
    );
  }

  onCancelClick(item: ProductGroupModel){
    alert(JSON.stringify(this.editedItem));

    item = this.editedItem;
    this.editedItem = null;
  }


  onAddItem(){

    this.editedItem = new ProductGroupModel(0, "", "", "", null);
    this.list.push(this.editedItem);
    this.isNewRecord = true;

  }

  onSaveClick(item: ProductGroupModel){
    this.service.editProductGroup(item);
  }

  onDeleteClick(item: ProductGroupModel){
    if (confirm('Точно удалить?')){
      this.service.deleteProductGroup(item);
    }
  }

}
