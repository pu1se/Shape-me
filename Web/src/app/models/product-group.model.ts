import {ProductItemModel} from "./product-item.model";

export class ProductGroupModel {

  name: string;
  link: string;
  type: string;
  imgUrl: string;

  productList: ProductItemModel [] = new Array<ProductItemModel>();
}
