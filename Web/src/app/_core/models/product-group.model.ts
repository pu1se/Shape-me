import {ProductItemModel} from "./product-item.model";

export class ProductGroupModel {

  constructor(

    public productGroupId: number,
    public name: string,
    public link: string,
    public productType: string,
    public productList: ProductItemModel [] = new Array<ProductItemModel>(),

  ){}
}
