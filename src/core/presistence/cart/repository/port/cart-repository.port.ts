import { IQuery } from '@core/presistence/interface/query.interface';
import { CartDTO } from '@core/use-case/cart/dto/cart.dto';

export interface ICartRepositoryPort {
  storeCart(cartDTO: Partial<CartDTO>);
  findAllCart(query: IQuery): Promise<CartDTO[]>;
}
