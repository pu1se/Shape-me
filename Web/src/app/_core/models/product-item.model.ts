export class ProductItemModel {
    constructor(
      public name: string,
      public imageUrl: string,
      public price?: number,
      public isBest: boolean = false,
    ){}
}
