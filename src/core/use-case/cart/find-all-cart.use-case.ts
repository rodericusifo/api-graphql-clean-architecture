import { ICartRepositoryPort } from '@core/presistence/cart/repository/port/cart-repository.port';
import { IQuery } from '@core/presistence/interface/query.interface';
import { UseCase } from '@libs/contract/use-case';
import { CartDTO } from '@core/use-case/cart/dto/cart.dto';
import { FindAllCartDTO } from '@core/use-case/cart/dto/find-all-cart.dto';

export class FindAllCartUseCase implements UseCase<FindAllCartDTO, CartDTO[]> {
  constructor(private readonly cartRepository: ICartRepositoryPort) {}

  async execute(payload?: FindAllCartDTO): Promise<CartDTO[]> {
    const query: IQuery = {
      limit: payload.limit,
      page: payload.page,
      sortingBy: payload.sortingBy,
      sortingType: payload.sortingType,
    };
    return this.cartRepository.findAllCart(query);
  }
}
