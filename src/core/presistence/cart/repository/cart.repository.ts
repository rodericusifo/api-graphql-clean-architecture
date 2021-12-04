import { CartMapper } from '@application/mapper/cart.mapper';
import { CartDTO } from '@core/use-case/cart/dto/cart.dto';
import { EntityRepository, Repository } from 'typeorm';
import { Cart } from '@core/presistence/cart/entity/cart.entity';
import { ICartRepositoryPort } from '@core/presistence/cart/repository/port/cart-repository.port';

@EntityRepository(Cart)
export class CartRepository
  extends Repository<Cart>
  implements ICartRepositoryPort
{
  async storeCart(cartDTO: Partial<CartDTO>) {
    const cart = CartMapper.DTOToEntity(cartDTO);
    await this.save(cart);
  }

  async findAllCart(): Promise<CartDTO[]> {
    const carts = await this.find({ relations: ['product'] });
    return carts.map(CartMapper.EntityToDTO);
  }
}
