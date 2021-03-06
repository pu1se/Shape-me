import { Injectable } from '@angular/core';
import {ProductGroupModel} from "../models/product-group.model";
import {ProductItemModel} from "../models/product-item.model";
import {KeyValue} from "../models/key-value";
import {ApiService} from "./api.service";
import {Observable} from "rxjs/Observable";

@Injectable()
export class ProductGroupService {

  groupList: ProductGroupModel[];

  constructor(private api: ApiService) {

    this.groupList = [

      <ProductGroupModel>{name: 'Скульптуры', productType: 'sculpture',
        productList: [
          { name: '02', imageUrl: '/assets/images/sculpture/02.jpg' },
          { name: '14', imageUrl: '/assets/images/sculpture/14.jpg' },
          { name: '23', imageUrl: '/assets/images/sculpture/23.jpg' },
          { name: '28', imageUrl: '/assets/images/sculpture/28.jpg' },
          { name: '41', imageUrl: '/assets/images/sculpture/41.jpg' },
          { name: '48', imageUrl: '/assets/images/sculpture/48.jpg' },
          { name: '57', imageUrl: '/assets/images/sculpture/57.jpg' },
          { name: '59', imageUrl: '/assets/images/sculpture/59.jpg' },
        ] },


      <ProductGroupModel>{name: 'Фонтаны', productType: 'fountain',
        productList: [
          { name: '12', imageUrl: '/assets/images/fountain/12.jpg' },
          { name: '14', imageUrl: '/assets/images/fountain/14.jpg' },
          { name: '19', imageUrl: '/assets/images/fountain/19.jpg' },
          { name: '33', imageUrl: '/assets/images/fountain/33.jpg' },
          { name: '34', imageUrl: '/assets/images/fountain/34.jpg' },
          { name: '42', imageUrl: '/assets/images/fountain/42.jpg' },
          { name: '47', imageUrl: '/assets/images/fountain/47.jpg' },
          { name: '52', imageUrl: '/assets/images/fountain/52.jpg' },
        ] },

      <ProductGroupModel>{name: 'Декоры', productType: 'decor',
        productList: [
          { name: '058', imageUrl: '/assets/images/decor/058.jpg' },
          { name: '060', imageUrl: '/assets/images/decor/060.jpg' },
          { name: '081', imageUrl: '/assets/images/decor/081.jpg' },
          { name: '082', imageUrl: '/assets/images/decor/082.jpg' },
          { name: '090', imageUrl: '/assets/images/decor/090.jpg' },
          { name: '092', imageUrl: '/assets/images/decor/092.jpg' },
          { name: '106', imageUrl: '/assets/images/decor/106.jpg' },
          { name: '131', imageUrl: '/assets/images/decor/131.jpg' },
          { name: '191', imageUrl: '/assets/images/decor/191.jpg' },
          { name: '194', imageUrl: '/assets/images/decor/194.jpg' },
          { name: '196', imageUrl: '/assets/images/decor/196.jpg' },
          { name: '197', imageUrl: '/assets/images/decor/197.jpg' },
          { name: '198', imageUrl: '/assets/images/decor/198.jpg' },
          { name: '201', imageUrl: '/assets/images/decor/201.jpg' },
          { name: '233', imageUrl: '/assets/images/decor/233.jpg' },
          { name: '234', imageUrl: '/assets/images/decor/234.jpg' },
          { name: '235', imageUrl: '/assets/images/decor/235.jpg' },
          { name: '257', imageUrl: '/assets/images/decor/257.jpg' },
          { name: '258', imageUrl: '/assets/images/decor/258.jpg' },
          { name: '259', imageUrl: '/assets/images/decor/259.jpg' },
          { name: '746', imageUrl: '/assets/images/decor/746.jpg' },
        ] },

      <ProductGroupModel>{name: 'Израсцы', productType: 'ornamented-tile',
        productList: [
          { name: '49', imageUrl: '/assets/images/ornamented-tile/49.jpg' },
          { name: '51', imageUrl: '/assets/images/ornamented-tile/51.jpg' },
          { name: '53', imageUrl: '/assets/images/ornamented-tile/53.jpg' },
          { name: '60', imageUrl: '/assets/images/ornamented-tile/60.jpg' },
          { name: '62', imageUrl: '/assets/images/ornamented-tile/62.jpg' },
          { name: '64', imageUrl: '/assets/images/ornamented-tile/64.jpg' },
          { name: '90', imageUrl: '/assets/images/ornamented-tile/90.jpg' },
          { name: '91', imageUrl: '/assets/images/ornamented-tile/91.jpg' },
        ] },

      <ProductGroupModel>{name: 'Плитки', productType: 'tile',
        productList: [
          { name: 'Mankhetten 1', imageUrl: '/assets/images/tile/Mankhetten1.jpg' },
          { name: 'Mankhetten 6', imageUrl: '/assets/images/tile/Mankhetten6.jpg', isBest: true },
          { name: 'Pompeya 1', imageUrl: '/assets/images/tile/Pompeya1.jpg' },
          { name: 'Pompeya 11', imageUrl: '/assets/images/tile/Pompeya11.jpg', isBest: true },
          { name: 'Pompeya 14', imageUrl: '/assets/images/tile/Pompeya14.jpg' },
          { name: 'Pompeya 16', imageUrl: '/assets/images/tile/Pompeya16.jpg' },
          { name: 'Pompeya 6', imageUrl: '/assets/images/tile/Pompeya6.jpg' },
          { name: 'Rim 1', imageUrl: '/assets/images/tile/Rim1.jpg' },
          { name: 'Rim 6', imageUrl: '/assets/images/tile/Rim6.jpg', isBest: true },
          { name: 'Tira 1', imageUrl: '/assets/images/tile/Tira1.jpg', isBest: true },
          { name: 'Tira 6', imageUrl: '/assets/images/tile/Tira6.jpg' },
          { name: 'Vizantiya 1', imageUrl: '/assets/images/tile/Vizantiya1.jpg' },
          { name: 'Vizantiya 6', imageUrl: '/assets/images/tile/Vizantiya6.jpg', isBest: true },
        ] },


      <ProductGroupModel>{name: 'Сувениры', productType: 'souvenir',
        productList: [
          { name: '01', imageUrl: '/assets/images/souvenir/01.jpg' },
          { name: '04', imageUrl: '/assets/images/souvenir/04.jpg', isBest: true },
          { name: '06', imageUrl: '/assets/images/souvenir/06.jpg', isBest: true },
          { name: '07', imageUrl: '/assets/images/souvenir/07.jpg' },
          { name: '08', imageUrl: '/assets/images/souvenir/08.jpg' },
          { name: '09', imageUrl: '/assets/images/souvenir/09.jpg' },
          { name: '14', imageUrl: '/assets/images/souvenir/14.jpg' },
          { name: '15', imageUrl: '/assets/images/souvenir/15.jpg', isBest: true },
          { name: '18', imageUrl: '/assets/images/souvenir/18.jpg', isBest: true },
          { name: '19', imageUrl: '/assets/images/souvenir/19.jpg' },
          { name: '22', imageUrl: '/assets/images/souvenir/22.jpg' },
          { name: '25', imageUrl: '/assets/images/souvenir/25.jpg', isBest: true },
          { name: '33', imageUrl: '/assets/images/souvenir/33.jpg', isBest: true },
          { name: '36', imageUrl: '/assets/images/souvenir/36.jpg', isBest: true },
          { name: '37', imageUrl: '/assets/images/souvenir/37.jpg', isBest: true },
          { name: '38', imageUrl: '/assets/images/souvenir/38.jpg', isBest: true },
          { name: '41', imageUrl: '/assets/images/souvenir/41.jpg', isBest: true },
          { name: '46', imageUrl: '/assets/images/souvenir/46.jpg', isBest: true },
          { name: '50', imageUrl: '/assets/images/souvenir/50.jpg', isBest: true },
          { name: '51', imageUrl: '/assets/images/souvenir/51.jpg', isBest: true },
          { name: '52', imageUrl: '/assets/images/souvenir/52.jpg', isBest: true },
          { name: '54', imageUrl: '/assets/images/souvenir/54.jpg', isBest: true },
        ] },


      <ProductGroupModel>{name: 'Кашпо', productType: 'flowerpot',
        productList: [
          { name: '14', imageUrl: '/assets/images/flowerpot/14.jpg' },
          { name: '18', imageUrl: '/assets/images/flowerpot/18.jpg' },
          { name: '32', imageUrl: '/assets/images/flowerpot/32.jpg' },
          { name: '38', imageUrl: '/assets/images/flowerpot/38.jpg' },
          { name: '44', imageUrl: '/assets/images/flowerpot/44.jpg' },
          { name: '49', imageUrl: '/assets/images/flowerpot/49.jpg' },
          { name: '54', imageUrl: '/assets/images/flowerpot/54.jpg' },
        ] },


      <ProductGroupModel>{name: 'Галерея', productType: 'gallery',
        productList: [
          { name: '05', imageUrl: '/assets/images/gallery/05.jpg' },
          { name: '06', imageUrl: '/assets/images/gallery/06.jpg' },
          { name: '08', imageUrl: '/assets/images/gallery/08.jpg' },
          { name: '09', imageUrl: '/assets/images/gallery/09.jpg' },
          { name: '14', imageUrl: '/assets/images/gallery/14.jpg' },
          { name: '21', imageUrl: '/assets/images/gallery/21.jpg' },
          { name: '22', imageUrl: '/assets/images/gallery/22.jpg' },
          { name: '24', imageUrl: '/assets/images/gallery/24.jpg' },
          { name: '82', imageUrl: '/assets/images/gallery/82.jpg' },
        ] },


    ];

    for (const item of this.groupList){
      item.link = '/catalog/' + item.productType;
    }

  }

  getList(): ProductGroupModel[]{
    return this.groupList;
  }

  getItemByType( type: string ): ProductGroupModel {
    return this.groupList.filter(x => x.productType === type)[0];
  }

  getNavigationLinkList(): Array<KeyValue>{
    return this.groupList.map(x => new KeyValue(x.name,x.link));
  }




  // dinamic api
  getProductGroupList():Observable<ProductGroupModel[]> {
    return this.api.get('products');
  }

  addProductGroup(item: ProductGroupModel){
    alert(JSON.stringify(item));
  }

  editProductGroup(item: ProductGroupModel){
    alert(JSON.stringify(item));
  }

  deleteProductGroup(item: ProductGroupModel){
    alert(JSON.stringify(item));
  }

}
