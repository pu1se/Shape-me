import { Injectable } from '@angular/core';
import {ProductGroupModel} from "../models/product-group.model";
import {ProductItemModel} from "../models/product-item.model";
import {KeyValue} from "../models/key-value";

@Injectable()
export class ProductGroupService {

  groupList: ProductGroupModel[];

  constructor() {

    this.groupList = [
      <ProductGroupModel>{name: 'Плитки', type: 'tile', imgUrl: 'https://img1.liveinternet.ru/images/attach/c/6/92/919/92919523_large_d2be8d7272cf.jpg',
        productList: [
          { name: '123', imageUrl: 'http://profiplitka.ru/published/publicdata/PROFIPLITKA/attachments/SC/products_pictures/cersanit-lati-1_enl.jpg' },
          { name: '123', imageUrl: 'http://www.stk-rb.ru/wp-content/uploads/2017/10/1eb7efa9611ee6fb894ceec26ae25973.jpg' },
          { name: '123', imageUrl: 'http://dtk-m.ru/wp-content/uploads/2017/09/plitka-emphasis-materia-dune-3323_6.jpg' },
          { name: '123', imageUrl: 'http://profiplitka.ru/published/publicdata/PROFIPLITKA/attachments/SC/products_pictures/vallelunga-lirica-2_enl.jpg' },
          { name: '123', imageUrl: 'http://keramikacity.com/images/Kyhnja/Del_Conca/CM_Cordi_di_Canepa_20x20/%D0%9F%D0%BB%D0%B8%D1%82%D0%BA%D0%B0_%D0%B4%D0%B5%D0%BA%D0%BE%D1%80%D0%B8%D1%80._20x20_CORTI_DI_CANEPA_SIGNORIE_A.CM.jpg' },
          { name: '123', imageUrl: 'https://santehlux.by/images/cache/222b38/nastennaya_plitka_kerama_marazzi_kaleydoskop_20x20_1.jpg' },
          { name: '123', imageUrl: 'https://santehlux.by/upload/iblock/979/keramin-sierra-seriya.jpg' },
          { name: '123', imageUrl: 'http://profiplitka.ru/published/publicdata/PROFIPLITKA/attachments/SC/products_pictures/cersanit-lati-1_enl.jpg' },
          { name: '123', imageUrl: 'http://www.stk-rb.ru/wp-content/uploads/2017/10/1eb7efa9611ee6fb894ceec26ae25973.jpg' },
          { name: '123', imageUrl: 'http://dtk-m.ru/wp-content/uploads/2017/09/plitka-emphasis-materia-dune-3323_6.jpg' },
          { name: '123', imageUrl: 'http://profiplitka.ru/published/publicdata/PROFIPLITKA/attachments/SC/products_pictures/vallelunga-lirica-2_enl.jpg' },
          { name: '123', imageUrl: 'http://keramikacity.com/images/Kyhnja/Del_Conca/CM_Cordi_di_Canepa_20x20/%D0%9F%D0%BB%D0%B8%D1%82%D0%BA%D0%B0_%D0%B4%D0%B5%D0%BA%D0%BE%D1%80%D0%B8%D1%80._20x20_CORTI_DI_CANEPA_SIGNORIE_A.CM.jpg' },
          { name: '123', imageUrl: 'https://santehlux.by/images/cache/222b38/nastennaya_plitka_kerama_marazzi_kaleydoskop_20x20_1.jpg' },
          { name: '123', imageUrl: 'https://santehlux.by/upload/iblock/979/keramin-sierra-seriya.jpg' },
        ] },

      <ProductGroupModel>{name: 'Сувениры', type: 'souvenir', imgUrl: 'https://img1.liveinternet.ru/images/attach/c/10/110/218/110218457_large_R_RRRRRR_2.jpg',
        productList: [
          { name: '123', imageUrl: 'http://profiplitka.ru/published/publicdata/PROFIPLITKA/attachments/SC/products_pictures/cersanit-lati-1_enl.jpg' },
          { name: '123', imageUrl: 'http://www.stk-rb.ru/wp-content/uploads/2017/10/1eb7efa9611ee6fb894ceec26ae25973.jpg' },
          { name: '123', imageUrl: 'http://dtk-m.ru/wp-content/uploads/2017/09/plitka-emphasis-materia-dune-3323_6.jpg' },
          { name: '123', imageUrl: 'http://profiplitka.ru/published/publicdata/PROFIPLITKA/attachments/SC/products_pictures/vallelunga-lirica-2_enl.jpg' },
          { name: '123', imageUrl: 'http://keramikacity.com/images/Kyhnja/Del_Conca/CM_Cordi_di_Canepa_20x20/%D0%9F%D0%BB%D0%B8%D1%82%D0%BA%D0%B0_%D0%B4%D0%B5%D0%BA%D0%BE%D1%80%D0%B8%D1%80._20x20_CORTI_DI_CANEPA_SIGNORIE_A.CM.jpg' },
          { name: '123', imageUrl: 'https://santehlux.by/images/cache/222b38/nastennaya_plitka_kerama_marazzi_kaleydoskop_20x20_1.jpg' },
          { name: '123', imageUrl: 'https://santehlux.by/upload/iblock/979/keramin-sierra-seriya.jpg' },
          { name: '123', imageUrl: 'http://profiplitka.ru/published/publicdata/PROFIPLITKA/attachments/SC/products_pictures/cersanit-lati-1_enl.jpg' },
          { name: '123', imageUrl: 'http://www.stk-rb.ru/wp-content/uploads/2017/10/1eb7efa9611ee6fb894ceec26ae25973.jpg' },
          { name: '123', imageUrl: 'http://dtk-m.ru/wp-content/uploads/2017/09/plitka-emphasis-materia-dune-3323_6.jpg' },
          { name: '123', imageUrl: 'http://profiplitka.ru/published/publicdata/PROFIPLITKA/attachments/SC/products_pictures/vallelunga-lirica-2_enl.jpg' },
          { name: '123', imageUrl: 'http://keramikacity.com/images/Kyhnja/Del_Conca/CM_Cordi_di_Canepa_20x20/%D0%9F%D0%BB%D0%B8%D1%82%D0%BA%D0%B0_%D0%B4%D0%B5%D0%BA%D0%BE%D1%80%D0%B8%D1%80._20x20_CORTI_DI_CANEPA_SIGNORIE_A.CM.jpg' },
          { name: '123', imageUrl: 'https://santehlux.by/images/cache/222b38/nastennaya_plitka_kerama_marazzi_kaleydoskop_20x20_1.jpg' },
          { name: '123', imageUrl: 'https://santehlux.by/upload/iblock/979/keramin-sierra-seriya.jpg' },
        ] },

      <ProductGroupModel>{name: 'Камины', type: 'fireplace', imgUrl: 'https://img1.liveinternet.ru/images/attach/c/6/89/863/89863303_large_000070.jpg',
        productList: [<ProductItemModel>
          { name: '123', imageUrl: 'https://avatars.mds.yandex.net/get-pdb/38069/7740a75b-6aae-4b31-9a21-199d6893a776/s1200' },
          { name: '123', imageUrl: 'https://avatars.mds.yandex.net/get-pdb/38069/7740a75b-6aae-4b31-9a21-199d6893a776/s1200' },
          { name: '123', imageUrl: 'https://avatars.mds.yandex.net/get-pdb/38069/7740a75b-6aae-4b31-9a21-199d6893a776/s1200' },
          { name: '123', imageUrl: 'https://avatars.mds.yandex.net/get-pdb/38069/7740a75b-6aae-4b31-9a21-199d6893a776/s1200' },
          { name: '123', imageUrl: 'https://avatars.mds.yandex.net/get-pdb/38069/7740a75b-6aae-4b31-9a21-199d6893a776/s1200' },
          { name: '123', imageUrl: 'https://avatars.mds.yandex.net/get-pdb/38069/7740a75b-6aae-4b31-9a21-199d6893a776/s1200' },
          { name: '123', imageUrl: 'https://avatars.mds.yandex.net/get-pdb/38069/7740a75b-6aae-4b31-9a21-199d6893a776/s1200' },
          { name: '123', imageUrl: 'https://avatars.mds.yandex.net/get-pdb/38069/7740a75b-6aae-4b31-9a21-199d6893a776/s1200' },
          { name: '123', imageUrl: 'http://profiplitka.ru/published/publicdata/PROFIPLITKA/attachments/SC/products_pictures/cersanit-lati-1_enl.jpg' },
          { name: '123', imageUrl: 'http://www.stk-rb.ru/wp-content/uploads/2017/10/1eb7efa9611ee6fb894ceec26ae25973.jpg' },
          { name: '123', imageUrl: 'http://dtk-m.ru/wp-content/uploads/2017/09/plitka-emphasis-materia-dune-3323_6.jpg' },
          { name: '123', imageUrl: 'http://profiplitka.ru/published/publicdata/PROFIPLITKA/attachments/SC/products_pictures/vallelunga-lirica-2_enl.jpg' },
          { name: '123', imageUrl: 'http://keramikacity.com/images/Kyhnja/Del_Conca/CM_Cordi_di_Canepa_20x20/%D0%9F%D0%BB%D0%B8%D1%82%D0%BA%D0%B0_%D0%B4%D0%B5%D0%BA%D0%BE%D1%80%D0%B8%D1%80._20x20_CORTI_DI_CANEPA_SIGNORIE_A.CM.jpg' },
          { name: '123', imageUrl: 'https://santehlux.by/images/cache/222b38/nastennaya_plitka_kerama_marazzi_kaleydoskop_20x20_1.jpg' },
          { name: '123', imageUrl: 'https://santehlux.by/upload/iblock/979/keramin-sierra-seriya.jpg' },
        ] },

      <ProductGroupModel>{name: 'Под заказ', type: 'unique', imgUrl: 'http://3.bp.blogspot.com/-cB1M4_GdhCg/Ucl3BQvhyII/AAAAAAAAz8A/nH6beKrO8DA/s1600/Stephanie_Birdsall_17.jpg',
        productList: [<ProductItemModel>
          { name: '123', imageUrl: 'http://www.fromthebest.ru/components/com_virtuemart/shop_image/product/5032-0199.jpg' },
          { name: '123', imageUrl: 'http://profiplitka.ru/published/publicdata/PROFIPLITKA/attachments/SC/products_pictures/cersanit-lati-1_enl.jpg' },
          { name: '123', imageUrl: 'http://www.stk-rb.ru/wp-content/uploads/2017/10/1eb7efa9611ee6fb894ceec26ae25973.jpg' },
          { name: '123', imageUrl: 'http://dtk-m.ru/wp-content/uploads/2017/09/plitka-emphasis-materia-dune-3323_6.jpg' },
          { name: '123', imageUrl: 'https://santehlux.by/images/cache/222b38/nastennaya_plitka_kerama_marazzi_kaleydoskop_20x20_1.jpg' },
          { name: '123', imageUrl: 'http://www.stk-rb.ru/wp-content/uploads/2017/10/1eb7efa9611ee6fb894ceec26ae25973.jpg' },
          { name: '123', imageUrl: 'http://dtk-m.ru/wp-content/uploads/2017/09/plitka-emphasis-materia-dune-3323_6.jpg' },
          { name: '123', imageUrl: 'http://profiplitka.ru/published/publicdata/PROFIPLITKA/attachments/SC/products_pictures/vallelunga-lirica-2_enl.jpg' },
          { name: '123', imageUrl: 'http://keramikacity.com/images/Kyhnja/Del_Conca/CM_Cordi_di_Canepa_20x20/%D0%9F%D0%BB%D0%B8%D1%82%D0%BA%D0%B0_%D0%B4%D0%B5%D0%BA%D0%BE%D1%80%D0%B8%D1%80._20x20_CORTI_DI_CANEPA_SIGNORIE_A.CM.jpg' },
          { name: '123', imageUrl: 'https://santehlux.by/images/cache/222b38/nastennaya_plitka_kerama_marazzi_kaleydoskop_20x20_1.jpg' },
          { name: '123', imageUrl: 'https://santehlux.by/upload/iblock/979/keramin-sierra-seriya.jpg' },
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
