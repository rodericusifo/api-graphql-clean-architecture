import { EntityRepository, Repository } from 'typeorm';
import { CartEntity } from '@core/presistence/cart/entity/cart.entity';
import { ICartRepositoryPort } from '@core/presistence/cart/repository/port/cart-repository.port';

@EntityRepository(CartEntity)
export class CartRepository
  extends Repository<CartEntity>
  implements ICartRepositoryPort
{
  storeCart(cartEntity: CartEntity): Promise<CartEntity> {
    return this.save(cartEntity);
  }
}
