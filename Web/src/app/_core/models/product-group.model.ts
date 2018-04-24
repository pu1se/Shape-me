import {ProductItemModel} from "./product-item.model";

export class ProductGroupModel {

  name: string;
  link: string;
  type: string;

  productList: ProductItemModel [] = new Array<ProductItemModel>();
}
