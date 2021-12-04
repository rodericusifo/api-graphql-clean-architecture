import { CartDTO } from '@core/use-case/cart/dto/cart.dto';

export interface ICartRepositoryPort {
  storeCart(cartDTO: Partial<CartDTO>);
  findAllCart(): Promise<CartDTO[]>;
}
