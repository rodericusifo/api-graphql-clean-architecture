import { CartMapper } from '@core/presistence/mapper/cart.mapper';
import { CartDTO } from '@core/use-case/cart/dto/cart.dto';
import { EntityRepository, Repository } from 'typeorm';
import { Cart } from '@core/presistence/cart/entity/cart.entity';
import { ICartRepositoryPort } from '@core/presistence/cart/repository/port/cart-repository.port';
import {
  IQuery,
  SortingType,
} from '@core/presistence/interface/query.interface';

@EntityRepository(Cart)
export class CartRepository
  extends Repository<Cart>
  implements ICartRepositoryPort
{
  async storeCart(cartDTO: Partial<CartDTO>) {
    const cart = CartMapper.DTOToEntity(cartDTO);
    await this.save(cart);
  }
  async findAllCart(query: IQuery): Promise<CartDTO[]> {
    const foundCarts = await this.find({
      skip: (query.page - 1) * query.limit || 0,
      take: query.limit || 10,
      order: {
        product:
          query.sortingBy === 'product' &&
          query.sortingType === SortingType.Descending
            ? 'DESC'
            : 'ASC',
      },
      relations: ['product'],
    });
    return foundCarts.map(CartMapper.EntityToDTO);
  }
}
