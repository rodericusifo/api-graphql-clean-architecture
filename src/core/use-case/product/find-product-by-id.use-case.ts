import { ProductDTO } from '@core/use-case/product/dto/product.dto';
import { UseCase } from '@libs/contract/use-case';
import { IProductRepositoryPort } from '@core/presistence/product/repository/port/product-repository.port';
import { FindProductByIdDTO } from '@core/use-case/product/dto/find-product-by-id.dto';
import { plainToClass } from 'class-transformer';

export class FindProductByIdUseCase
  implements UseCase<FindProductByIdDTO, ProductDTO>
{
  constructor(private readonly productRepository: IProductRepositoryPort) {}

  async execute(payload?: FindProductByIdDTO): Promise<ProductDTO> {
    let productDTO = plainToClass(ProductDTO, payload);
    productDTO = await this.productRepository.findProductById(productDTO);
    return productDTO;
  }
}
