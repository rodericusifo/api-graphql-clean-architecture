import { CartEntity } from '@core/presistence/cart/entity/cart.entity';

export interface ICartRepositoryPort {
  storeCart(cartEntity: CartEntity): Promise<CartEntity>;
}
