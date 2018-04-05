import { Injectable } from '@angular/core';
import {ProductGroupModel} from "../models/product-group.model";
import {ProductItemModel} from "../models/product-item.model";
import {KeyValue} from "../models/key-value";

@Injectable()
export class ProductGroupService {

  groupList: ProductGroupModel[];

  constructor() {

    this.groupList = [

      <ProductGroupModel>{name: 'Скульптуры', type: 'sculpture',
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

      <ProductGroupModel>{name: 'Плитки', type: 'tile',
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


      <ProductGroupModel>{name: 'Камины', type: 'fireplace',
        productList: [<ProductItemModel>
          { name: 'имя', price: 20, imageUrl: 'https://avatars.mds.yandex.net/get-pdb/38069/7740a75b-6aae-4b31-9a21-199d6893a776/s1200' },
          { name: 'имя', price: 20, imageUrl: 'https://avatars.mds.yandex.net/get-pdb/38069/7740a75b-6aae-4b31-9a21-199d6893a776/s1200' },
          { name: 'имя', price: 20, imageUrl: 'https://avatars.mds.yandex.net/get-pdb/38069/7740a75b-6aae-4b31-9a21-199d6893a776/s1200' },
          { name: 'имя', price: 20, imageUrl: 'https://avatars.mds.yandex.net/get-pdb/38069/7740a75b-6aae-4b31-9a21-199d6893a776/s1200' },
          { name: 'имя', price: 20, imageUrl: 'https://avatars.mds.yandex.net/get-pdb/38069/7740a75b-6aae-4b31-9a21-199d6893a776/s1200' },
          { name: 'имя', price: 20, imageUrl: 'https://avatars.mds.yandex.net/get-pdb/38069/7740a75b-6aae-4b31-9a21-199d6893a776/s1200' },
          { name: 'имя', price: 20, imageUrl: 'https://avatars.mds.yandex.net/get-pdb/38069/7740a75b-6aae-4b31-9a21-199d6893a776/s1200' },
          { name: 'имя', price: 20, imageUrl: 'https://avatars.mds.yandex.net/get-pdb/38069/7740a75b-6aae-4b31-9a21-199d6893a776/s1200' },
          { name: 'имя', price: 20, imageUrl: 'http://profiplitka.ru/published/publicdata/PROFIPLITKA/attachments/SC/products_pictures/cersanit-lati-1_enl.jpg' },
          { name: 'имя', price: 20, imageUrl: 'http://www.stk-rb.ru/wp-content/uploads/2017/10/1eb7efa9611ee6fb894ceec26ae25973.jpg' },
          { name: 'имя', price: 20, imageUrl: 'http://dtk-m.ru/wp-content/uploads/2017/09/plitka-emphasis-materia-dune-3323_6.jpg' },
          { name: 'имя', price: 20, imageUrl: 'http://profiplitka.ru/published/publicdata/PROFIPLITKA/attachments/SC/products_pictures/vallelunga-lirica-2_enl.jpg' },
          { name: 'имя', price: 20, imageUrl: 'http://keramikacity.com/images/Kyhnja/Del_Conca/CM_Cordi_di_Canepa_20x20/%D0%9F%D0%BB%D0%B8%D1%82%D0%BA%D0%B0_%D0%B4%D0%B5%D0%BA%D0%BE%D1%80%D0%B8%D1%80._20x20_CORTI_DI_CANEPA_SIGNORIE_A.CM.jpg' },
          { name: 'имя', price: 20, imageUrl: 'https://santehlux.by/images/cache/222b38/nastennaya_plitka_kerama_marazzi_kaleydoskop_20x20_1.jpg' },
          { name: 'имя', price: 20, imageUrl: 'https://santehlux.by/upload/iblock/979/keramin-sierra-seriya.jpg' },
        ] },

      <ProductGroupModel>{name: 'Под заказ', type: 'unique',
        productList: [<ProductItemModel>
          { name: 'имя', price: 20, imageUrl: 'http://www.fromthebest.ru/components/com_virtuemart/shop_image/product/5032-0199.jpg' },
          { name: 'имя', price: 20, imageUrl: 'http://profiplitka.ru/published/publicdata/PROFIPLITKA/attachments/SC/products_pictures/cersanit-lati-1_enl.jpg' },
          { name: 'имя', price: 20, imageUrl: 'http://www.stk-rb.ru/wp-content/uploads/2017/10/1eb7efa9611ee6fb894ceec26ae25973.jpg' },
          { name: 'имя', price: 20, imageUrl: 'http://dtk-m.ru/wp-content/uploads/2017/09/plitka-emphasis-materia-dune-3323_6.jpg' },
          { name: 'имя', price: 20, imageUrl: 'https://santehlux.by/images/cache/222b38/nastennaya_plitka_kerama_marazzi_kaleydoskop_20x20_1.jpg' },
          { name: 'имя', price: 20, imageUrl: 'http://www.stk-rb.ru/wp-content/uploads/2017/10/1eb7efa9611ee6fb894ceec26ae25973.jpg' },
          { name: 'имя', price: 20, imageUrl: 'http://dtk-m.ru/wp-content/uploads/2017/09/plitka-emphasis-materia-dune-3323_6.jpg' },
          { name: 'имя', price: 20, imageUrl: 'http://profiplitka.ru/published/publicdata/PROFIPLITKA/attachments/SC/products_pictures/vallelunga-lirica-2_enl.jpg' },
          { name: 'имя', price: 20, imageUrl: 'http://keramikacity.com/images/Kyhnja/Del_Conca/CM_Cordi_di_Canepa_20x20/%D0%9F%D0%BB%D0%B8%D1%82%D0%BA%D0%B0_%D0%B4%D0%B5%D0%BA%D0%BE%D1%80%D0%B8%D1%80._20x20_CORTI_DI_CANEPA_SIGNORIE_A.CM.jpg' },
          { name: 'имя', price: 20, imageUrl: 'https://santehlux.by/images/cache/222b38/nastennaya_plitka_kerama_marazzi_kaleydoskop_20x20_1.jpg' },
          { name: 'имя', price: 20, imageUrl: 'https://santehlux.by/upload/iblock/979/keramin-sierra-seriya.jpg' },
        ] },
    ];

    for (const item of this.groupList){
      item.link = '/product/' + item.type;
    }

  }

  getList(): ProductGroupModel[]{
    return this.groupList;
  }

  getItemByType( type: string ): ProductGroupModel {
    return this.groupList.filter(x => x.type === type)[0];
  }

  getNavigationLinkList(): Array<KeyValue>{
    return this.groupList.map(x => new KeyValue(x.name,x.link));
  }
}
