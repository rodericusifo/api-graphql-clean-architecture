import { IQuery } from '@core/presistence/interface/query.interface';
import { FindAllProductDTO } from '@core/use-case/product/dto/find-all-product.dto';
import { ProductDTO } from '@core/use-case/product/dto/product.dto';
import { UseCase } from '@libs/contract/use-case';
import { IProductRepositoryPort } from '@core/presistence/product/repository/port/product-repository.port';

export class FindAllProductUseCase
  implements UseCase<FindAllProductDTO, ProductDTO[]>
{
  constructor(private readonly productRepository: IProductRepositoryPort) {}

  async execute(payload?: FindAllProductDTO): Promise<ProductDTO[]> {
    const query: IQuery = {
      limit: payload.limit,
      page: payload.page,
      sortingBy: payload.sortingBy,
      sortingType: payload.sortingType,
    };
    return this.productRepository.findAllProduct(query);
  }
}
