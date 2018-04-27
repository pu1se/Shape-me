import {ProductItemModel} from "./product-item.model";

export class ProductGroupModel {

  name: string;
  link: string;
  productType: string;

  productList: ProductItemModel [] = new Array<ProductItemModel>();
}
