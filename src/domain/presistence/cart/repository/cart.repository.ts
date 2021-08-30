import { EntityRepository, Repository } from 'typeorm';
import { CartEntity } from '@domain/presistence/cart/entity/cart.entity';
import { ICartRepositoryPort } from '@domain/presistence/cart/repository/port/cart-repository.port';

@EntityRepository(CartEntity)
export class CartRepository
  extends Repository<CartEntity>
  implements ICartRepositoryPort
{
  storeCart(cartEntity: CartEntity): Promise<CartEntity> {
    return this.save(cartEntity);
  }
}
