import { IProduct } from './iproduct.model';
import { IShoppingCart } from './ishoppingcart.model';

export interface IState {
    readonly product: IProduct
    readonly productcatalog: Array<IProduct>
    readonly shoppingcart: Array<IShoppingCart>
}