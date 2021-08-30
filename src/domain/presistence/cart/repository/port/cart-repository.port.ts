import { CartEntity } from '@domain/presistence/cart/entity/cart.entity';
export interface ICartRepositoryPort {
  storeCart(cartEntity: CartEntity): Promise<CartEntity>;
}
